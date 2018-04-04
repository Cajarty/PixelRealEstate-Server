const ctrWrp = require('./contract.js');
const Timer = require('./timer.js');
const Func = require('./functions.js');
const Cache = require('./cache.js');
var compress = require('jsoncomp');
var PNG = require('pngjs').PNG;
const Response = require('./responses.js');
const slice = require('array-slice');
const flags = require('./flags.js');
const { BotImages, LoadBotImages } = require('./botData.js');
const EVENTS = require('./events.js');

const owner0 = '0x0000000000000000000000000000000000000000';

class Storage {
    constructor() {
        //stored in [0...999] rows and holds arrays of length of 4000 of all pixels in that row.
        this.pixelData = {};

        //stored in [x][y] of all properties and their non-color data.
        this.propertyData = {};

        //0 to 10000, for property data loading
        this.propertyLoadValue = 0;

        //timer id for auto image cacheing
        this.cacheImageTimer = null;

        //ranges from 0 to 10,000
        this.loadValue = 0;

        this.loadingComplete = false;

        this.pixelsOwned = {};
        this.pixelsRented = {};
        this.pixelsForSale = {};
        this.pixelsForRent = {};
        this.insertPixelRow = this.insertPixelRow.bind(this);
        this.storePropertyData = this.storePropertyData.bind(this);

        //debug
        //disables the load 1-100% of gathering pixel data for all properties, used for testing only
        this.disableCanvasReload = flags.RELOAD;

        //enables pre-release advertising bot, must be set to true to use the setupBot function
        //bot images are imported from botData.js
        this.useBot = flags.USE_BOT;
        this.pauseBot = false;
        this.botTimer = null;

        //enables or disables caching
        this.cacheImage = flags.CACHE_IMAGE;

        this.evHndl = {
            [EVENTS.PropertyColorUpdate]: null,
            [EVENTS.PropertyBought]: null,
            [EVENTS.SetUserHoverText]: null,
            [EVENTS.SetUserSetLink]: null,
            [EVENTS.PropertySetForSale]: null,
            [EVENTS.DelistProperty]: null,
            [EVENTS.SetPropertyPublic]: null,
            [EVENTS.SetPropertyPrivate]: null,
            [EVENTS.Bid]: null,
        };
    }


    setupBot() {
        if (!this.useBot) {
            console.info('BOT: Disabled. Not starting.');
            return;
        }

        console.info('BOT: Starting...');

        this.botTimer = setInterval(() => {
            if (this.pauseBot)
                return;
            let xPos = 0;
            let yPos = Math.round(Math.random() * 19) * 50;
            while (xPos <= 999) {
                let imageIndex, imageKeys, imageName, image;
                do {
                    imageIndex = Math.floor(Object.keys(BotImages).length * Math.random()) % Object.keys(BotImages).length;
                    imageKeys = Object.keys(BotImages);
                    imageName = imageKeys[imageIndex];
                    image = BotImages[imageKeys[imageIndex]];
                } while (image.width + xPos > 1000);
                console.info('BOT: Placing image:\t[' + imageName + '] at:\tx: [' + xPos + '] y: [' + yPos + ']');
                this.insertImage(xPos, yPos, image.image);
                xPos += image.width;
            }
        }, 5017);
    }

    disableBot() {
        if (this.botTimer == null)
            return;
        console.info('BOT: Stopping...');
        clearInterval(this.botTimer);
    }

    insertImage(x, y, data) {
        for (let i = 0; i < Object.keys(data).length; i++) {
            if (this.pixelData[y + i] == null)
                this.pixelData[y + i] = [];
            for (let c = 0; c < data[i].length; c++)
                this.pixelData[y + i][x * 4 + c] = data[i][c];
        }
    }

    loadCanvas() {
        this.listenForEvents();
        //get current block here and store so that the events know where to start looking at logs
        console.info('Loading properties...');
        Cache.UncacheImage(Cache.PATHS.PNG_STORAGE, (err, data) => {
            if (data != null) {
                this.png = data;
                for (let y = 0; y < 1000; y++) {
                    this.pixelData[y] = slice(data.data, y * 4000, (y + 1) * 4000);
                }
                this.loadingComplete = true;
            } else {
                console.info('No cached canvas image, creating a blank one.');
                let fakeData = [0, 0, 0, 255];
                for (let y = 0; y < 1000; y++) {
                    this.pixelData[y] = [];
                    for (let i = 0; i < 4000; i++)
                        this.pixelData[y].push(fakeData[i % 4]);
                }
                Cache.CacheImage(Cache.PATHS.PNG_STORAGE, this.pixelData, () => {});
            }
            console.info('Requesting updates...');
            if (!this.disableCanvasReload)
                this.loadCanvasChunk(0);
            else
                this.loadData();
        });
    }

    loadCanvasChunk(x) {
        for (let y = 0; y < 100; y++) {
            ctrWrp.instance.getPropertyColors(x, y, this.insertPixelRow);
        }
    }

    insertPixelRow(x, y, data) {
        this.insertImage(x * 10, y * 10, data);
        this.loadValue += 1;
        if (this.loadValue == (x + 1) * 100 && this.loadValue < 10000) {
            console.info('Loading canvas data: ' + (this.loadValue / 100) + '%');
            this.loadCanvasChunk(++x);
        } else if (this.loadValue >= 10000) {
            this.completePixelDataLoad();
        }
    }

    completePixelDataLoad() {
        console.info('Verifying load was successful.');
        for (let i = 0; i < 1000; i++)
            if (this.pixelData[i].length != 4000) {
                console.info('Invalid leength of pixel array for row ' + i + '. Length was ' + this.pixelData[i].length + '. Reloading.');
                this.pixelData = {};
                this.loadValue = 0;
                this.loadingComplete = false;
                this.loadCanvas();
            }
        console.info('Loading complete! Cacheing image to file for quick reload.');
        Cache.CacheImage(Cache.PATHS.PNG_STORAGE, this.pixelData, () => {});
        this.setupCacheLoop();
        this.loadData();
        this.loadingComplete = true;
    }

    /*
    Loads all the property data from the contract and stores them in a js object.
    */
    loadData(row = 0) {
        if (row > 99 || row < 0)
            return;
        for (let x = 0; x < 100; x++)
            ctrWrp.instance.getPropertyData(x, row, this.storePropertyData);
    }

    /*
    Used for organizing storage from the loadData call for property data.
    */
    storePropertyData(x, y, data) {
        let ethp = Func.BigNumberToNumber(data[1]);
        let ppcp = Func.BigNumberToNumber(data[2]);
        let obj = {
            x: x,
            y: y,
            owner: data[0],
            isForSale: ppcp != 0,
            ETHPrice: ethp,
            PPCPrice: ppcp,
            lastUpdate: Func.BigNumberToNumber(data[3]),
            isInPrivate: data[4],
        };
        if (this.propertyData[x] == null)
            this.propertyData[x] = {};
        this.propertyData[x][y] = obj;
        this.propertyLoadValue++;
        if (this.propertyLoadValue >= (y + 1) * 100) {
            console.info('Loading property data: ' + (this.propertyLoadValue / 100) + '%');
            this.loadData(y + 1);
            if (this.propertyLoadValue >= 10000) {
                console.info('Loading property data complete!');
                this.setupBot();
                this.setupCacheLoop();
                this.listenForEvents();
                return;
            }
        }
    }

    setupCacheLoop() {
        if (this.cacheImageTimer != null || !this.cacheImage)
            return;
        this.cacheImageTimer = setInterval(() => {
            let string = '';
            string += ("Now cacheing image.");
            this.pauseBot = true;
            let temp = this.pixelData;
            Cache.CacheImage(Cache.PATHS.PNG_STORAGE, temp, (result) => {
                string += ("Image Cached! " + (new Date()).toString());
            });
            Cache.CacheFile(Cache.PATHS.DATA_STORAGE, this.propertyData, (result) => {
                string += ("Properties Cached! " + (new Date()).toString());
            });
            Cache.CacheImage(flags.ENV_DEV ? Cache.PATHS.CANVAS_STORAGE_DEV : Cache.PATHS.CANVAS_STORAGE, temp, (result) => {
                this.pauseBot = false;
                string += ("Canvas Cached! " + (new Date()).toString());
            });
            Cache.CacheFile(flags.ENV_DEV ? Cache.PATHS.CANVAS_DATA_STORAGE_DEV : Cache.PATHS.CANVAS_DATA_STORAGE, this.propertyData, (result) => {
                this.pauseBot = false;
                string += ("Canvas Data Cached! " + (new Date()).toString());
            });

            if (!flags.ENV_DEV) {
                Cache.CacheImage(Cache.PATHS.PORTFOLIO_STORAGE, temp, (result) => {
                    this.pauseBot = false;
                    string += ("Portfolio Cached! " + (new Date()).toString());
                });
            }
            console.info(string);
        }, 15000);
    }

    stopCacheLoop() {
        clearInterval(this.cacheImageTimer);
        console.info("No longer cacheing image!");
    }

    getImageData() {
        if (this.loadingComplete)
            return this.pixelDataHex;
        return 'Server is loading image, please wait. (' + (this.loadValue / 100) + '%)';
    }

    getPropertyData() {
        if (this.propertyLoadValue >= 10000)
            return this.propertyData;
        return 'Server is loading data, please wait. (' + (this.propertyLoadValue / 100) + '%)';
    }

    insertPropertyImage(x, y, data) {
        for (let i = 0; i < Object.keys(data).length; i++) {
            if (this.pixelData[y * 10 + i] == null)
                this.pixelData[y * 10 + i] = [];
            for (let c = 0; c < data[i].length; c++)
                this.pixelData[y * 10 + i][x * 40 + c] = data[i][c];
        }
    }

    listenForEvents() {
        ctrWrp.instance.watchEventLogs(EVENTS.PropertyColorUpdate, {}, (handle) => {
            this.evHndl[EVENTS.PropertyColorUpdate] = handle;
            this.evHndl[EVENTS.PropertyColorUpdate].watch((error, log) => {
                let id = ctrWrp.instance.fromID(Func.BigNumberToNumber(log.args.property));
                let colors = Func.ContractDataToRGBAArray(log.args.colors);
                this.forceUpdatePropertyData(id.x, id.y);
                this.insertPropertyImage(id.x, id.y, colors);
            });
        });

        ctrWrp.instance.watchEventLogs(EVENTS.PropertyBought, {}, (handle) => {
            this.evHndl[EVENTS.PropertyBought] = handle;
            this.evHndl[EVENTS.PropertyBought].watch((error, log) => {
                let id = ctrWrp.instance.fromID(Func.BigNumberToNumber(log.args.property));
                this.updateProperty(id.x, id.y, { owner: log.args.newOwner });
                this.organizeProperty(id.x, id.y);
            });
        });

        ctrWrp.instance.watchEventLogs(EVENTS.SetUserHoverText, {}, (handle) => {
            this.evHndl[EVENTS.SetUserHoverText] = handle;
            this.evHndl[EVENTS.SetUserHoverText].watch((error, log) => {
                console.error('No Event handler for ', Event.SetUserHoverText);
            });
        });

        ctrWrp.instance.watchEventLogs(EVENTS.SetUserSetLink, {}, (handle) => {
            this.evHndl[EVENTS.SetUserSetLink] = handle;
            this.evHndl[EVENTS.SetUserSetLink].watch((error, log) => {
                console.error('No Event handler for ', Event.SetUserSetLink);
            });
        });

        ctrWrp.instance.watchEventLogs(EVENTS.PropertySetForSale, {}, (handle) => {
            this.evHndl[EVENTS.PropertySetForSale] = handle;
            this.evHndl[EVENTS.PropertySetForSale].watch((error, log) => {
                let id = ctrWrp.instance.fromID(Func.BigNumberToNumber(log.args.property));
                this.updateProperty(id.x, id.y, { isForSale: true });
                this.organizeProperty(id.x, id.y);
            });
        });

        ctrWrp.instance.watchEventLogs(EVENTS.DelistProperty, {}, (handle) => {
            this.evHndl[EVENTS.DelistProperty] = handle;
            this.evHndl[EVENTS.DelistProperty].watch((error, log) => {
                let id = ctrWrp.instance.fromID(Func.BigNumberToNumber(log.args.property));
                this.updateProperty(id.x, id.y, { isForSale: false });
                this.organizeProperty(id.x, id.y);
            });
        });

        ctrWrp.instance.watchEventLogs(EVENTS.SetPropertyPublic, {}, (handle) => {
            this.evHndl[EVENTS.SetPropertyPublic] = handle;
            this.evHndl[EVENTS.SetPropertyPublic].watch((error, log) => {
                console.info(log);
                throw 'Need to update the correct data here.';
                let id = ctrWrp.instance.fromID(Func.BigNumberToNumber(log.args.property));
                this.updateProperty(id.x, id.y, { isForSale: false });
                this.organizeProperty(id.x, id.y);
            });
        });

        ctrWrp.instance.watchEventLogs(EVENTS.SetPropertyPrivate, {}, (handle) => {
            this.evHndl[EVENTS.SetPropertyPrivate] = handle;
            this.evHndl[EVENTS.SetPropertyPrivate].watch((error, log) => {
                console.info(log);
                throw 'Need to update the correct data here.';
                let id = ctrWrp.instance.fromID(Func.BigNumberToNumber(log.args.property));
                this.updateProperty(id.x, id.y, { isForSale: false });
                this.organizeProperty(id.x, id.y);
            });
        });

        ctrWrp.instance.watchEventLogs(EVENTS.Bid, {}, (handle) => {
            this.evHndl[EVENTS.Bid] = handle;
            this.evHndl[EVENTS.Bid].watch((error, log) => {
                let id = ctrWrp.instance.fromID(Func.BigNumberToNumber(log.args.property));
                let bid = Func.BigNumberToNumber(log.args.bid);
                let timestamp = Func.BigNumberToNumber(log.args.timestamp);
                let x = id.x,
                    y = id.y;
                if (this.bids[x] == null)
                    this.bids[x] = {};
                if (this.bids[x][y] == null)
                    this.bids[x][y] = {};
                this.bids[x][y][timestamp] = bid;
            });
        });
    }

    destructor() {
        Object.keys(this.evHndl).map((key, i) => {
            this.evHndl[key].stopWatching();
        });
    }


    /*
    Updates a property at a location with the new passed in data.
    */
    updatePropertyData(x, y, update) {
        if (this.propertyData[x] == null) {
            this.propertyData[x] = {};
        }
        this.propertyData[x][y] = Object.assign({}, this.propertyData[x][y] || {}, update);
    }

    simplifyData(data) {
        let array = [];
        for (let i = 0; i < Object.keys(data).length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                array.push(data[i][j]);
            }
        }
        return array;
    }

    buildImage(data) {
        new PNG({
            filterType: 4,
            width: 1000,
            height: 1000,
        }).on('parsed', function() {
            for (let i = 0; i < Object.keys(data).length; i++) {
                for (let j = 0; j < data[i].length; j++) {
                    this.data[i * data[i].length + j] = data[i][j];
                }
            }
            this.png = this.pack();
            return this.png;
        });
    }

    getImage() {
        if (this.loadingComplete)
            return this.png;
        else
            return Response.IMAGE_NOT_LOADED(this.loadValue / 100);
    }
}

module.exports.instance = new Storage();