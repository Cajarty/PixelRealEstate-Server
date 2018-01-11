// Include it and extract some methods for convenience
const server = require('server');
const contract = require("truffle-contract");
const CtrWrp = require('./contract.js');
const Storage = require('./storage.js');
const Timer = require('./timer.js');

const {get, post } = server.router;
const { render, json } = server.reply;

const cors = [
    ctx => server.reply.header("Access-Control-Allow-Origin", "*"),
    ctx => server.reply.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"),
    ctx => server.reply.header('Access-Control-Allow-Methods', 'GET')
];

const options = {
    port: 6500,
    security: {
        csrf: false
    }
};

// Launch server with options and a couple of routes
server(options, cors, [
    get('/getCanvas', (ctx) => {
        return Storage.instance.getImageData();
    }),
    /*post('/nice', (ctx) => {
        console.log(ctx.data);
        return ctx.data;
    })*/
]);

console.info("Running on port: ", options.port);

Storage.instance.loadCanvas();