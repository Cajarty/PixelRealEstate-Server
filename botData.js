const Cache = require('./cache.js');

const BotImages = {
    eth50x50: { image: null, width: 50, height: 50 },
    btc50x50: { image: null, width: 50, height: 50 },
    neo50x50: { image: null, width: 50, height: 50 },
    doge50x50: { image: null, width: 50, height: 50 },
    ark50x50: { image: null, width: 50, height: 50 },
    eos50x50: { image: null, width: 50, height: 50 },
    ltc50x50: { image: null, width: 50, height: 50 },
    xmr50x50: { image: null, width: 50, height: 50 },
    steem50x50: { image: null, width: 50, height: 50 },
    test200x50: { image: null, width: 200, height: 50 },
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
                BotImages[imageNames[i]].image = finalData;
            } else {
                console.info('Error loading bot images.');
            }
        });
    }
}


module.exports.BotImages = BotImages;
module.exports.LoadBotImages = LoadImages();