// Include it and extract some methods for convenience
const contract = require("truffle-contract");
const CtrWrp = require('./contract.js');
const Storage = require('./storage.js');
const Timer = require('./timer.js');
const fs = require('fs');
const cors = require('cors');
const https = require('https');
const express = require('express');

const ENV_DEV = process.argv[2] === 'dev' ? true : false;

if (ENV_DEV) {
    console.warn("----------------- CAUTION -----------------");
    console.warn("You are running dev. DO NOT use this for production.");
    console.warn("----------------- CAUTION -----------------");
}

const options = {
    key: fs.readFileSync('./ssl/ssl.key'),
    cert: fs.readFileSync('./ssl/ssl.crt'),
    requestCert: false,
    rejectUnauthorized: false
};

var app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", (ENV_DEV ? '*' : 'https://pixelproperty.io'));
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', '');
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
var server = https.createServer(options, app).listen(6500, function() {
    console.log("Running on port: ", 6500);
});

Storage.instance.loadCanvas();