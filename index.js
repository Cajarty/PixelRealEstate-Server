// Include it and extract some methods for convenience
const server = require('server');
const contract = require("truffle-contract");
const CtrWrp = require('./contract.js');
const Storage = require('./storage.js');
const Timer = require('./timer.js');

const { get } = server.router;
const { render, json } = server.reply;

const cors = [
    ctx => server.reply.header("Access-Control-Allow-Origin", "canvas.pixelproperty.io"),
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
    /*post('/nice', (ctx) => {
        console.log(ctx.data);
        return ctx.data;
    })*/
]);

console.info("Running on port: ", options.port);

Storage.instance.loadCanvas();