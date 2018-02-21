// Include it and extract some methods for convenience
const server = require('server');
const contract = require("truffle-contract");
const CtrWrp = require('./contract.js');
const Storage = require('./storage.js');
const Timer = require('./timer.js');
const fs = require('fs');

const { get } = server.router;
const { render, json } = server.reply;

const ENV_DEV = process.argv[2] === 'dev' ? true : false;

if (ENV_DEV) {
    console.warn("----------------- CAUTION -----------------");
    console.warn("You are running dev. DO NOT use this for production.");
    console.warn("----------------- CAUTION -----------------");
}

const cors = [
    ctx => server.reply.header("Access-Control-Allow-Origin", (ENV_DEV ? '*' : 'https://pixelproperty.io')),
    ctx => server.reply.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"),
    ctx => server.reply.header('Access-Control-Allow-Methods', '')
];


const options = {
    port: 6500,
    csrf: {
        ignoreMethods: ['PUT', 'POST', 'DELETE', 'HEAD', 'OPTIONS'],
        value: req => req.body.csnowflakerf
    },
    frameguard: {
        action: 'deny'
    },
    ssl: {
        ca: [fs.readFileSync('./ssl/ssl1.cabundle'), fs.readFileSync('./ssl/ssl2.cabundle')],
        key: fs.readFileSync('./ssl/ssl.key'),
        cert: fs.readFileSync('./ssl/ssl.crt')
    }
};

// Launch server with options and a couple of routes
server(options, cors, [
    get('/getCanvas', (ctx) => {
        return Storage.instance.getImageData();
    }),
    get('/getImage.png', (ctx) => {
        return Storage.instance.getImage();
    }),
    get('/getPixelData', (ctx) => {
        return Storage.instance.pixelData;
    }),
    get('/getPropertyData', (ctx) => {
        return Storage.instance.getPropertyData();
    }),
]);

console.info("Running on port: ", options.port);

Storage.instance.loadCanvas();