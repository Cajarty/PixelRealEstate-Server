const Web3 = require('web3');
const contract = require("truffle-contract");
const path = require('path');
const VREPath = require(path.join(__dirname, 'build/contracts/VirtualRealEstate.json'));
const Functions = require('./functions.js');
const Timer = require('./timer.js');

class Contract {
    constructor() {
        this.listeners = {};
        this.VRE = null; //contract reference

        this.setup();
    }

    setup() {
        // Setup RPC connection   
        let VREProvider = new Web3.providers.HttpProvider("http://localhost:8545"); //window.web3.currentProvider

        // Read JSON and attach RPC connection (Provider)
        this.VRE = contract(VREPath);
        this.VRE.setProvider(VREProvider);
    }

    toID(x, y) {
        return y * Const.PROPERTIES_WIDTH + x;
    }

    fromID(id) {
        let obj = { x: 0, y: 0 };
        obj.x = id % Const.PROPERTIES_WIDTH;
        obj.y = Math.floor(id / 1000);
        return obj;
    }

    buyProperty(x, y, price) {
        this.VRE.deployed().then((i) => {
            return i.buyProperty(this.toID(x, y), { value: price, from: this.account });
        }).then(() => {
            this.sendResults(true, "Property " + x + "x" + y + " purchase complete.");
        }).catch((e) => {
            console.info(e);
            this.sendResults(false, "Unable to purchase property " + x + "x" + y + ".");
        });
    }

    sellProperty(x, y, price) {
        this.VRE.deployed().then((i) => {
            return i.listforSale(this.toID(x, y), { from: this.account });
        }).then(() => {
            console.info("Pixel " + x + "x" + y + " purchase complete.");
        }).catch((e) => {
            console.log(e);
        });
    }

    //array of 2 32 bytes of string
    setHoverText(x, y, text) {
        let strs = [];
        strs.push(text.slice(0, 32));
        strs.push(text.slice(33, 64));
        this.VRE.deployed().then((i) => {
            return i.setHoverText(this.toID(x, y), strs, { from: this.account });
        }).then(function() {
            console.info("Pixel " + x + "x" + y + " update complete.");
        }).catch((e) => {
            console.log(e);
        });
    }

    //array of 2 32 bytes
    setLink(x, y, text) {
        let strs = [];
        strs.push(text.slice(0, 32));
        strs.push(text.slice(33, 64));
        this.VRE.deployed().then((i) => {
            return i.setLink(this.toID(x, y), strs, { from: this.account });
        }).then(function() {
            console.info("Pixel " + x + "x" + y + " update complete.");
        }).catch((e) => {
            console.log(e);
        });
    }

    getForSalePrice(x, y) {
        this.VRE.deployed().then((i) => {
            return i.getForSalePrice.call(this.toID(x, y)).then((r) => {
                return r;
            });
        }).catch((e) => {
            console.log(e);
        });
    }

    getForRentPrice(x, y) {
        this.VRE.deployed().then((i) => {
            return i.getForRentPrice.call(this.toID(x, y)).then((r) => {
                return r;
            });
        }).catch((e) => {
            console.log(e);
        });
    }

    getHoverText(x, y) {
        this.VRE.deployed().then((i) => {
            return i.getHoverText.call(this.toID(x, y)).then((r) => {
                return r;
            });
        }).catch((e) => {
            console.log(e);
        });
    }

    getLink(x, y) {
        this.VRE.deployed().then((i) => {
            return i.getLink.call(this.toID(x, y)).then((r) => {
                return r;
            });
        }).catch((e) => {
            console.log(e);
        });
    }

    getPropertyColorsOfRow(x, row, callback) {
        this.VRE.deployed().then((i) => {
            return i.getPropertyColorsOfRow.call(x, row).then((r) => {
                callback(x, row, Functions.ContractDataToRGBAArray(r));
            });
        }).catch((e) => {
            console.log(e);
        });
    }

    getPropertyColors(x, y, callback) {
        this.VRE.deployed().then((i) => {
            return i.getPropertyColors.call(this.toID(x, y)).then((r) => {
                callback(x, y, Functions.ContractDataToRGBAArray(r));
            });
        }).catch((e) => {
            console.log(e);
        });
    }

    getPropertyData(x, y) {
        //returns address, price, renter, rent length, rentedUntil, rentPrice
        this.VRE.deployed().then((i) => {
            return i.getPropertyData.call(this.toID(x, y)).then((r) => {
                return r;
            });
        }).catch((e) => {
            console.log(e);
        });
    }

    setColors(x, y, data) {
        this.VRE.deployed().then((i) => {
            return i.setColors(this.toID(x, y), Functions.RGBArrayToContractData(data), { from: this.account });
        }).then(() => {
            this.sendResults(true, "Property " + x + "x" + y + " pixels changed.");
        }).catch((e) => {
            this.sendResults(false, "Error uploadimg pixels.");
        });
    }

    rentProperty(x, y, price) {
        this.VRE.deployed().then((i) => {
            return i.setLink(this.toID(x, y), { value: price, from: this.account });
        }).then(function() {
            console.info("Pixel " + x + "x" + y + " update complete.");
        }).catch((e) => {
            console.log(e);
        });
    }

    stoVREnting(x, y) {
        this.VRE.deployed().then((i) => {
            return i.setLink(this.toID(x, y), { from: this.account });
        }).then(function() {
            console.info("Pixel " + x + "x" + y + " update complete.");
        }).catch((e) => {
            console.log(e);
        });
    }

    /*
    duration == seconds
    */
    listForRent(x, y, price, duration) {

    }

    /*
    Stop renting/selling a pixel you own.
    */
    delist(x, y, delistFromSale, delistFromRent) {

    }

    /*
    Subscriber functions for function call returns on the contract so the
    ui can update when it sees a change.
    */
    listenForResults(key, callback) {
        this.listeners[key] = callback;
    }

    stopListeningForResults(key) {
        delete this.listeners[key];
    }

    sendResults(result, message) {
        Object.keys(this.listeners).map((i) => {
            this.listeners[i](result, message);
        });
    }
}

module.exports.instance = new Contract();