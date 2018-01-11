const ctrWrp = require('./contract.js');
const Timer = require('./timer.js');
const Functions = require('./functions.js');
const Cache = require('./cache.js');
var compress = require('jsoncomp');

class Storage {
    constructor() {
        //stored in [0...999] rows and holds arrays of length of 4000 of all pixels in that row.
        this.pixelData = {};

        //stored in [0..999] rows and holds arrays of length 500 of all pixels, in hex string format.
        this.pixelDataHex = {};

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
        Cache.UncacheFile(Cache.PATHS.IMAGE_STORAGE, (err, data) => {
            if (data != null) {
                this.pixelDataHex = data;
                this.loadingComplete = true;
                console.info('Requesting updates...');
            } else {
                console.info('No cached canvas image, loading a new one from the contract.');
            }
            this.loadCanvasChunk(0, 0);
        });
    }

    loadCanvasChunk(x, row) {
        for (let y = row; y < row + 100; y++) {
            ctrWrp.instance.getPropertyColorsOfRow(x, y, this.insertPixelRow);
        }
    }

    insertPixelRow(x, row, data) {
        if (this.pixelData[row] == null)
            this.pixelData[row] = [];
        for (let i = 0; i < data.length; i++)
            this.pixelData[row].push(data[i]);
        this.loadValue += 1;
        if (this.loadValue % 100 == (x + 10) * 10 % 100 && this.loadValue < 10000) {
            console.info('Loading: ' + (this.loadValue / 100) + '%');
            this.loadCanvasChunk((x + 10) % 100, Math.floor(this.loadValue / 1000) * 100);
        } else if (this.loadValue >= 10000) {
            this.completePixelDataLoad(x);
        }
    }

    completePixelDataLoad(x) {
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
        this.pixelDataHex = Functions.ImageDataToBase64(this.pixelData);
        Cache.CacheFile(Cache.PATHS.IMAGE_STORAGE, this.pixelDataHex);
        this.loadingComplete = true;
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
}

module.exports.instance = new Storage();