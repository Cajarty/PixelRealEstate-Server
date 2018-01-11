var fs = require('fs');
var compress = require('lzwcompress');

const PATHS = {
    IMAGE_STORAGE: './cache/image.txt',
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

module.exports.PATHS = PATHS;
module.exports.CacheFile = CacheFile;
module.exports.UncacheFile = UncacheFile;