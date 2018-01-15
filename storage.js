const ctrWrp = require('./contract.js');
const Timer = require('./timer.js');
const Functions = require('./functions.js');
const Cache = require('./cache.js');
var compress = require('jsoncomp');
var PNG = require('pngjs').PNG;
const Response = require('./responses.js');
const slice = require('array-slice');

class Storage {
    constructor() {
        //stored in [0...999] rows and holds arrays of length of 4000 of all pixels in that row.
        this.pixelData = {};

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
    }

    loadCanvas() {
        console.info('Loading real estate pixels...');
        Cache.UncacheImage(Cache.PATHS.PNG_STORAGE, (err, data) => {
            if (data != null) {
                this.png = data;
                for (let y = 0; y < 1000; y++) {
                    this.pixelData[y] = slice(data.data, y * 4000, (y + 1) * 4000);
                }
                this.loadingComplete = true;
                console.info('Requesting updates...');
            } else {
                console.info('No cached canvas image, loading a new one from the contract.');
                let fakeData = [0, 0, 0, 255];
                for (let y = 0; y < 1000; y++) {
                    this.pixelData[y] = [];
                    for (let i = 0; i < 1000; i++)
                        this.pixelData[y].push(fakeData);
                }
            }
            this.loadCanvasChunk(0);
        });
    }

    loadCanvasChunk(x) {
        for (let y = 0; y < 100; y++) {
            ctrWrp.instance.getPropertyColors(x, y, this.insertPixelRow);
        }
    }

    insertPixelRow(x, y, data) {
        for (let i = 0; i < Object.keys(data).length; i++) {
            if (this.pixelData[y * 10 + i] == null)
                this.pixelData[y * 10 + i] = [];
            for (let c = 0; c < data[i].length; c++)
                this.pixelData[y * 10 + i][x * 40 + c] = data[i][c];
        }
        this.loadValue += 1;
        if (this.loadValue == (x + 1) * 100 && this.loadValue < 10000) {
            console.info('Loading: ' + (this.loadValue / 100) + '%');
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
        Cache.CacheImage(Cache.PATHS.PNG_STORAGE, this.pixelData);
        this.setupCacheLoop();
        this.loadingComplete = true;
    }

    setupCacheLoop() {
        console.info("Now cacheing image.");
        this.cacheImageTimer = setInterval(() => {
            Cache.CacheImage(Cache.PATHS.PNG_STORAGE, this.pixelData);
            console.info("Image Cached! " + (new Date()).toString());
        }, 60000);
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