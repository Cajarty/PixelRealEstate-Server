var fs = require('fs');
var compress = require('lzwcompress');
var PNG = require('pngjs').PNG;

const PATHS = {
    PNG_STORAGE: './cache/image.png',
    BOT_IMAGE_LOC: './BotImages/',
}

const CacheFile = (path, data) => {
    fs.writeFile(path, JSON.stringify(data), 'utf8', (err) => {
        if (err)
            console.info(err);
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

const CacheImage = (path, data, callback) => {
    let img = new PNG({
        filterType: 4,
        width: Object.keys(data).length,
        height: data[0].length / 4,
    });
    for (let i = 0; i < Object.keys(data).length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            img.data[i * data[i].length + j] = data[i][j];
        }
    }
    img.pack().pipe(fs.createWriteStream(path)).on('finish', () => {
        callback(true);
    });
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