const StorageEthereum = require('./StorageEthereum').StorageEthereum;
const StoragePolygon = require('./storagePolygon').StoragePolygon;
const StorageSkale = require('./storageSkale').StorageSkale;

const Func = require('./functions.js');
const Cache = require('./cache.js');
var compress = require('jsoncomp');
var PNG = require('pngjs').PNG;
const Response = require('./responses.js');
const slice = require('array-slice');
const flags = require('./flags.js');
const { BotImages, LoadBotImages } = require('./botData.js');
const EVENTS = require('./events.js');

class StorageManager {
    constructor() {
        this.storage = {
            42: new StorageEthereum(this, 42),
            80001: new StoragePolygon(this, 80001),
            43113: new StorageSkale(this, 43113)
        };

        this.eventData = {
            topTenPayouts: [],
            recentPayouts: [],
            yourPayouts: [], //not used due to server limitations
        
            topTenPXLTrades: [],
            topTenETHTrades: [],
            recentTrades: [],
            yourTrades: [], //not used due to server limitations
        };

        this.isLoading = true;
        this.cacheImage = flags.CACHE_IMAGE;

        this.propertyData = {};

        this.pixelData = [];

        this._init();

        setInterval(() => {
            if (this.isLoading) {
                let storagesLoaded = true;
                this.forEachStorage((storage) => {
                    storagesLoaded &= storage.propertyLoadValue >= 10000;
                }, () => {
                    if (storagesLoaded) {
                        this.setupCacheLoop();
                        this.isLoading = false;
                    }
                });
            }
        }, 5000);
    }

    _init() {
        //load blank data
        const fakeData = [0, 0, 0, 255];
        for (let y = 0; y < 1000; y++) {
            this.pixelData[y] = [];
            for (let i = 0; i < 4000; i++)
                this.pixelData[y].push(fakeData[i % 4]);
        }
    }

    forEachStorage(callback, onComplete = null) {
        let keys = Object.keys(this.storage);
        for (let i = 0, le = keys.length; i < le; ++i) {
            callback(this.storage[keys[i]]);
        }
        if (onComplete) {
            onComplete();
        }
    }

    getStorage(chainID) {
        return this.storage[chainID];
    }

    setupCacheLoop() {
        if (this.cacheImageTimer != null || !this.cacheImage)
            return;
        this.cacheImageTimer = setInterval(() => {
            let string = '';
            string += ("Now cacheing image.");
            this.pauseBot = true;
            let temp = this.pixelData;
            Cache.CacheImage(Cache.PATHS.COMPLETE_PNG_STORAGE, temp, (result) => {
                string += ("Image Cached! " + (new Date()).toString());
            });
            if (this.cacheBackup++ >= 100) {
                Cache.CacheImage({dir: Cache.PATHS.COMPLETE_PNG_STORAGE.dir, name: 'image_backup_' + new Date().getTime() + '.png'}, temp, (result) => {
                    string += ("Image Backed Up! " + (new Date()).toString());
                });
                this.cacheBackup = 0;
            }
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

    loadCanvas() {
        this.forEachStorage((storage) => {
            storage.loadCanvas();
        });
    }

    getImageData() {

    }

    canSimpleUpdatePropertyImage() {
        let result = true;
        this.forEachStorage((storage) => {
            result &= storage.canSimpleUpdatePropertyImage();
        });
        return result;
    }

    insertPropertyImage(xx, yy, RGBArray) {
        let counter = 0;
        for (let y = yy * 10; y < (yy + 1) * 10; y++) {
            for (let x = xx * 10; x < (xx + 1) * 10; x++) {
                for (let i = 0; i < 3; i++){
                    this.pixelData[y][x * 4 + i] = RGBArray[counter++];
                }
                counter++
                this.pixelData[y][x * 4 + 3] = 255;
            }
        }
    }

    getEventData() {
        return this.eventData;
    }

    getPropertyData() {
        if (this.propertyLoadValue >= 10000)
            return this.propertyData;
        return 'Server is loading data, please wait. (%)';
    }

    getPixelData() {

    }

    cacheImage() {
        Cache.CacheImage(Cache.PATHS.COMPLETE_PNG_STORAGE, this.pixelData, () => {});
    }

    loadingComplete() {
        return true;
    }
}

let sm = new StorageManager();
module.exports.storageManager = sm;