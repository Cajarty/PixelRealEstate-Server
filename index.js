// Include it and extract some methods for convenience
//const server = require('server');
const contract = require("truffle-contract");
const CtrWrp = require('./contract.js');
const Storage = require('./storage.js');
const Timer = require('./timer.js');
const fs = require('fs');
var https = require('https');
var express = require('express');

//const { get } = server.router;
//const { render, json } = server.reply;

const ENV_DEV = process.argv[2] === 'dev' ? true : false;

if (ENV_DEV) {
    console.warn("----------------- CAUTION -----------------");
    console.warn("You are running dev. DO NOT use this for production.");
    console.warn("----------------- CAUTION -----------------");
}

const cors = [
    ctx => server.reply.header("Access-Control-Allow-Origin", (ENV_DEV ? '*' : 'https://pixelproperty.io')),
    ctx => server.reply.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"),
    ctx => server.reply.header('Access-Control-Allow-Methods', 'GET')
];


const options = {
    key: fs.readFileSync('./ssl/ssl.key'),
    cert: fs.readFileSync('./ssl/ssl.crt'),
    requestCert: false,
    rejectUnauthorized: false
};

var app = express();

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", (ENV_DEV ? '*' : 'https://pixelproperty.io'));
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
});

app.get('/getCanvas', (req, res) => {
    res.send(Storage.instance.getImageData());
    res.end();
});
app.get('/getImage.png', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'image/png' });
    let img = fs.readFileSync('./cache/image.png');
    res.end(img, 'binary');
});
app.get('/getPixelData', (req, res) => {
    res.send(Storage.instance.pixelData);
    res.end();
});
app.get('/getPropertyData', (req, res) => {
    res.send(Storage.instance.getPropertyData());
    res.end();
});
var server2 = https.createServer(options, app).listen(6500, function() {
    console.log("server started at port ", 6500);
});

// Launch server with options and a couple of routes
// server(options, cors, [
//     get('/getCanvas', (ctx) => {
//         return Storage.instance.getImageData();
//     }),
//     get('/getImage.png', (ctx) => {
//         return Storage.instance.getImage();
//     }),
//     get('/getPixelData', (ctx) => {
//         return Storage.instance.pixelData;
//     }),
//     get('/getPropertyData', (ctx) => {
//         return Storage.instance.getPropertyData();
//     }),
// ]);

console.info("Running on port: ", options.port);

Storage.instance.loadCanvas();