const flags = require('./flags.js');
const FBC = require('./ssl/firebaseConfig.js');
const firebase = require('firebase');

class Timer {
    constructor() {
        this.isDev = flags.ENV_DEV ? true : false;
        firebase.initializeApp(this.isDev ? FBC.devConfig : FBC.prodConfig);
    }

    start() {
        this.st = new Date().getTime();
    }

    end() {
        console.info(new Date().getTime() - this.st);
        this.st = 0;
    }
}


module.exports = new Timer();