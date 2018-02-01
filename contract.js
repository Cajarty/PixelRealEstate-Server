const Web3 = require('web3');
const contract = require("truffle-contract");
const path = require('path');
const VREPath = require(path.join(__dirname, 'build/contracts/VirtualRealEstate.json'));
const Functions = require('./functions.js');
const Timer = require('./timer.js');

const PROPERTIES_WIDTH = 100;

const EVENTS = {
    PropertyColorUpdate: 'PropertyColorUpdate', //(uint24 indexed property, uint256[10] colors, uint256 lastUpdate, address lastUpdaterPayee);
    PropertyColorUpdatePixel: 'PropertyColorUpdatePixel', //(uint24 indexed property, uint8 row, uint24 rgb);

    SetUserHoverText: 'SetUserHoverText', //(address indexed user, bytes32[2] newHoverText);
    SetUserSetLink: 'SetUserSetLink', //(address indexed user, bytes32[2] newLink);

    PropertyBought: 'PropertyBought', //(uint24 indexed property,  address newOwner);
    PropertySetForSale: 'PropertySetForSale', //(uint24 indexed property, uint256 forSalePrice);
    DelistProperty: 'DelistProperty', //(uint24 indexed property);

    ListTradeOffer: 'ListTradeOffer', //(address indexed offerOwner, uint256 eth, uint256 pxl, bool isBuyingPxl);
    AcceptTradeOffer: 'AcceptTradeOffer', //(address indexed accepter, address indexed offerOwner);
    CancelTradeOffer: 'CancelTradeOffer', //(address indexed offerOwner);

    SetPropertyPublic: 'SetPropertyPublic', //(uint24 indexed property);
    SetPropertyPrivate: 'SetPropertyPrivate', //(uint24 indexed property, uint32 numHoursPrivate);

    //token events    
    Transfer: 'Transfer', //(address indexed _from, address indexed _to, uint256 _value);
    Approval: 'Approval', //(address indexed _owner, address indexed _spender, uint256 _value);
};

class Contract {
    constructor() {
        this.VRE = null; //contract reference

        this.events = {
            event: null,
        }
        Object.keys(EVENTS).map((index) => {
            this.events[index] = {};
        });

        this.setup();
    }

    setup() {
        // Setup RPC connection   
        let VREProvider = new Web3.providers.HttpProvider("http://localhost:8545"); //window.web3.currentProvider

        // Read JSON and attach RPC connection (Provider)
        this.VRE = contract(VREPath);
        this.VRE.setProvider(VREProvider);
        this.setupEvents();
    }

    setupEvents() {
        this.VRE.deployed().then((instance) => {
            this.events.event = instance.allEvents({ fromBlock: 0, toBlock: 'latest' });
            this.events.event.watch((error, result) => {
                if (error) {
                    console.info(result, error);
                } else {
                    this.sendEvent(result.event, result);
                }
            });
        }).catch((c) => {
            console.info(c);
        });
    }

    toID(x, y) {
        return y * PROPERTIES_WIDTH + x;
    }

    fromID(id) {
        let obj = { x: 0, y: 0 };
        obj.x = id % PROPERTIES_WIDTH;
        obj.y = Math.floor(id / 100);
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

    getPropertyData(x, y, callback) {
        //returns address, price, renter, rent length, rentedUntil, rentPrice
        this.VRE.deployed().then((i) => {
            i.getPropertyData.call(this.toID(x, y)).then((r) => {
                callback(x, y, r);
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
    Subscriber functions for function call returns from events fired on the 
    contract.
    */
    listenForEvent(event, key, callback) {
        this.events[event][key] = callback;
    }

    stopListeningForEvent(event, key) {
        delete this.events[event][key];
    }

    sendEvent(event, result) {
        Object.keys(this.events[event]).map((i) => {
            this.events[event][i](result);
        });
    }
}

module.exports.instance = new Contract();
module.exports.EVENTS = EVENTS;