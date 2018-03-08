var ENV_DEV = false;
var RELOAD = false;
var CACHE_IMAGE = false;
var USE_BOT = false;

for (let i = 2; i < process.argv.length; i++) {
    if (process.argv[i] === 'dev')
        ENV_DEV = true;
    if (process.argv[i] === 'cache')
        CACHE_IMAGE = true;
    if (process.argv[i] === 'bot')
        USE_BOT = true;
    if (process.argv[i] === 'reload')
        RELOAD = true;
    if (process.argv[i] === 'help') {
        console.info("Flags: ", "\nENV_DEV:\tdev", "\nUSE_BOT:\tbot", "\nRELOAD: \treload", "\nCACHE_IMAGE:\tcache");
        process.exit();
    }
}

console.info("Flags enabled: ", ENV_DEV ? "ENV_DEV" : "", USE_BOT ? "USE_BOT" : "", RELOAD ? "RELOAD" : "", CACHE_IMAGE ? "CACHE_IMAGE" : "");

module.exports.ENV_DEV = ENV_DEV;
module.exports.RELOAD = RELOAD;
module.exports.CACHE_IMAGE = CACHE_IMAGE;
module.exports.USE_BOT = USE_BOT;