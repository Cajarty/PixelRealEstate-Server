var fs = require('fs');
var compress = require('lzwcompress');
var PNG = require('pngjs').PNG;
const flags = require('./flags.js');

let COVER_IMAGE = null;

const PATHS = {
    PNG_STORAGE: './cache/image.png',
    DATA_STORAGE: './cache/properties.json',
    PORTFOLIO_STORAGE: '../../img/canvas.png',
    CANVAS_STORAGE_DEV: '../PixelRealEstate/public/assets/canvas/canvas.png',
    CANVAS_STORAGE: '../assets/canvas.png',
    CANVAS_STORAGE_PORTFOLIO: '../../img/canvas/canvas.png',
    CANVAS_DATA_STORAGE_DEV: '../PixelRealEstate/public/assets/canvas/properties.json',
    CANVAS_DATA_STORAGE: '../assets/canvas/properties.json',
    BOT_IMAGE_LOC: './BotImages/',
}

const CacheFile = (path, data, callback) => {
    fs.writeFile(path, JSON.stringify(data), 'utf8', (err) => {
        if (err)
            callback(err);
        else
            callback(true);
    });
};

const UncacheFile = (path, callback) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err)
            return callback(err, null);
        if (data)
            return callback(err, JSON.parse(data));
        console.info('No data from load.');
    });
};

const lerp = (v0, v1, t) => {
    return v0 * (1 - t) + v1 * t;
}

const CacheImage = (path, data, callback) => {
    let img = new PNG({
        filterType: 4,
        width: Object.keys(data).length,
        height: data[0].length / 4,
    });
    if (flags.USE_COVER && COVER_IMAGE == null) {
        fs.createReadStream('./cache/cover.png')
            .pipe(new PNG({ filterType: 4 }))
            .on('parsed', function() {
                COVER_IMAGE = this;
                for (let i = 0; i < Object.keys(data).length; i++) {
                    for (let j = 0; j < data[i].length; j++) {
                        if (j % 4 == 3)
                            img.data[i * data[i].length + j] = Math.min(255, data[i][j] + COVER_IMAGE.data[i * data[i].length + j]);
                        else
                            img.data[i * data[i].length + j] = lerp(data[i][j], COVER_IMAGE.data[i * data[i].length + j], COVER_IMAGE.data[i * data[i].length + (Math.ceil(j / 4) * 4)] / 255);
                    }
                }
                img.pack().pipe(fs.createWriteStream(path)).on('finish', () => {
                    return callback(true);
                });
            });
    } else if (flags.USE_COVER && COVER_IMAGE != null) {
        for (let i = 0; i < Object.keys(data).length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                if (j % 4 == 3)
                    img.data[i * data[i].length + j] = Math.min(255, data[i][j] + COVER_IMAGE.data[i * data[i].length + j]);
                else
                    img.data[i * data[i].length + j] = lerp(data[i][j], COVER_IMAGE.data[i * data[i].length + j], COVER_IMAGE.data[i * data[i].length + (Math.ceil(j / 4) * 4)] / 255);
            }
        }
        img.pack().pipe(fs.createWriteStream(path)).on('finish', () => {
            return callback(true);
        });
    } else {
        for (let i = 0; i < Object.keys(data).length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                img.data[i * data[i].length + j] = data[i][j];
            }
        }
        img.pack().pipe(fs.createWriteStream(path)).on('finish', () => {
            return callback(true);
        });
    }
}

const UncacheImage = (path, callback) => {
    fs.createReadStream(path)
        .on('error', (err) => {
            return callback(err, null);
        })
        .pipe(new PNG({
            filterType: 4
        }))
        .on('parsed', function() {
            let err = null; //implement errors for this
            return callback(err, this);
        });
}

module.exports.PATHS = PATHS;
module.exports.CacheFile = CacheFile;
module.exports.UncacheFile = UncacheFile;
module.exports.CacheImage = CacheImage;
module.exports.UncacheImage = UncacheImage;