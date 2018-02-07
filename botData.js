const Cache = require('./cache.js');

const BotImages = {
    x10x10: null,
    nem50x25: null,
    iota50x25: null,
    sia50x25: null,
    neo50x25: null,
    neo200x100: null,
    sia200x100: null,
    iota200x100: null,
    nem200x100: null,
    eth50x50: null,
    btc50x50: null,
    neo50x50: null,
    doge50x50: null,
    ark50x50: null,
    eos50x50: null,
    ltc50x50: null,
    xmr50x50: null,
    steem50x50: null,
    steem200x200: null,
    xmr200x200: null,
    ltc200x200: null,
    eos200x200: null,
    ark200x200: null,
    doge200x200: null,
    btc200x200: null,
    eth200x200: null,
    eth10x10: null,
    happy10x10: null,
    btc10x10: null,
};

function LoadImages() {
    let imageNames = Object.keys(BotImages);
    for (let i = 0; i < imageNames.length; i++) {
        console.info(Cache.PATHS.BOT_IMAGE_LOC + imageNames[i] + '.png');
        Cache.UncacheImage(Cache.PATHS.BOT_IMAGE_LOC + imageNames[i] + '.png', (err, imgData) => {
            if (imgData != null) {
                let finalData = {};
                for (let y = 0; y < imgData.height; y++) {
                    finalData[y] = [];
                    for (let x = 0; x < imgData.width; x++)
                        for (let c = 0; c < 4; c++)
                            finalData[y].push(imgData.data[(y * imgData.width * 4) + (x * 4) + c]);
                }
                if (finalData == null)
                    console.info("failed loading: " + imageNames[i]);
                BotImages[imageNames[i]] = finalData;
            } else {
                console.info('Error loading bot images.');
            }
        });
    }
}


module.exports.BotImages = BotImages;
module.exports.LoadBotImages = LoadImages();