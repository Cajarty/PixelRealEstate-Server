const ethers = require('ethers');
const Web3 = require('web3');
const contract = require("truffle-contract");
const path = require('path');
const VREPath = require(path.join(__dirname, 'build/contracts/VirtualRealEstate.json'));
const PXLPPPath = require(path.join(__dirname, 'build/contracts/PXLProperty.json'));
const Func = require('./functions.js');
const Timer = require('./timer.js');
const CTRDATA = require('./contracts/ContractData');
const HDWalletProvider = require("@truffle/hdwallet-provider");

const PROPERTIES_WIDTH = 100;

const EVENTS = {
    PropertyColorUpdate: 'PropertyColorUpdate', //(uint24 indexed property, uint256[10] colors, uint256 lastUpdate, address lastUpdaterPayee);
    PropertyColorUpdatePixel: 'PropertyColorUpdatePixel', //(uint24 indexed property, uint8 row, uint24 rgb);

    //token events    
    Transfer: 'Transfer', //(address indexed _from, address indexed _to, uint256 _value);
    Approval: 'Approval', //(address indexed _owner, address indexed _spender, uint256 _value);
};

class Contract {
    constructor() {
        this.VRE = null; //DApp contract reference
        this.PXLPP = null; //Storage contract reference

        // Setup RPC connection   
        // 52.169.42.101:30303
        this.provider = new ethers.providers.Web3Provider(new HDWalletProvider({
            mnemonic: 'acid invest endorse drift congress middle lonely busy paddle another brain glue', // Throwaway 0-eth dev address
            providerOrUrl: 'https://api.avax-test.network/ext/bc/C/rpc', // API key used with that 100k daily limit
        }));

        // Read JSON and attach RPC connection (Provider)
        // this.VRE = contract(VREPath);
        // this.VRE.setProvider(VREProvider);
        // this.PXLPP = contract(PXLPPPath);
        // this.PXLPP.setProvider(VREProvider);
        this.getVREContract(() => {});
        this.getPXLContract(() => {});
    }

    // ---------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------------
    // ---------------------------------       SETUP & MISC       ----------------------------------------------
    // ---------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------------

    getVREContract(callback/*(contract)*/) {
        if (!this.VRE) {
            this.VRE = new ethers.Contract(CTRDATA.VRE_Skale_Address, CTRDATA.VRE_Skale_ABI, this.provider);
        }
        return callback(this.VRE);
    }

    getPXLContract(callback/*(contract)*/) {
        if (!this.PXLPP) {
            this.PXLPP = new ethers.Contract(CTRDATA.PXL_Skale_Address, CTRDATA.PXL_Skale_ABI, this.provider);
        }
        return callback(this.PXLPP);
    }

    /*
    Requests all events of event type EVENT.
    */
    getEventLogs(event, params = {}, callback) {

        let filter = { fromBlock: 0, toBlock: 'latest' };

        // VRE Dapp Events
        this.VRE.deployed().then((i) => {
            switch (event) {
                case EVENTS.PropertyColorUpdate:
                    return i.PropertyColorUpdate(params, filter).get(callback);
            }
        }).catch((e) => {
            console.error(e);
        });

        // ERC20 PXL Events
        this.PXLPP.deployed().then((i) => {
            switch (event) {
                case EVENTS.Transfer:
                    return i.Transfer(params, filter).get(callback);
                case EVENTS.Approval:
                    return i.Approval(params, filter).get(callback);
            }
        }).catch((e) => {
            console.error(e);
        });
    }

    /*
    Requests all events of event type EVENT.
    */
    watchEventLogs(event, params, callback) {
        let filter = { fromBlock: 0, toBlock: 'latest' };

        switch (event) {
            case EVENTS.PropertyColorUpdate:
                return this._watchVREEventLogs(event, callback);
            case EVENTS.Transfer:
            case EVENTS.Approval:
                return this._watchPXLEventLogs(event, callback);
        }
    }

    _watchVREEventLogs(event, callback) {
        return this.getVREContract((i) => {
            i.on(event, callback);
        });
    }

    _watchPXLEventLogs(event, callback) {
        return this.getPXLContract((i) => {
            i.on(event, callback);
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
    // ---------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------------
    // ---------------------------------       SETUP & MISC       ----------------------------------------------
    // ---------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------------



    // ---------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------------
    // ----------------------------------         SETTERS         ----------------------------------------------
    // ---------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------------

    setColors(x, y, data, PPT, callback) {
        this.VRE.deployed().then((i) => {
            return i.setColors(this.toID(x, y), Func.RGBArrayToContractData(data), PPT );
        }).then(() => {
            callback(true);
            this.sendResults(LISTENERS.Alert, { result: true, message: "Property " + (x + 1) + "x" + (y + 1) + " pixels changed." });
        }).catch((e) => {
            callback(false);
            this.sendResults(LISTENERS.Alert, { result: false, message: "Error uploading pixels." });
        });
    }

    // ---------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------------
    // ----------------------------------         SETTERS         ----------------------------------------------
    // ---------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------------








    // ---------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------------
    // ----------------------------------         GETTERS         ----------------------------------------------
    // ---------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------------
    getBalance(callback) {
        this.PXLPP.deployed().then((i) => {
            i.balanceOf(this.account, { from: this.account }).then((r) => {
                callback(Func.BigNumberToNumber(r));
            }).catch((e) => {
                console.error(e);
            });
        }).catch((e) => {
            console.info(e);
            this.sendResults(LISTENERS.Error, { result: false, message: "Unable to retrieve PPC balance." });
        });
    }

    getPropertyColorsOfRow(x, row, callback) {
        this.PXLPP.deployed().then((i) => {
            return i.getPropertyColorsOfRow.call(x, row).then((r) => {
                callback(x, row, Func.ContractDataToRGBAArray(r));
            }).catch((e) => {
                console.error(e);
            });
        }).catch((e) => {
            console.log(e);
        });
    }

    getPropertyColors(x, y, callback) {
        this.getPXLContract((i) => {
            return i.getPropertyColors(this.toID(x, y)).then((r) => {
                if (r[0] == 0 && r[1] == 0 && r[2] == 0 && r[3] == 0 && r[4] == 0)
                    callback(x, y, null);
                else
                    callback(x, y, Func.ContractDataToRGBAArray(r));
            }).catch((e) => {
                console.error(e);
            });
        });
    }

    getPropertyData(x, y, callback) {
        //returns address, price, renter, rent length, rentedUntil, rentPrice
        this.getVREContract((i) => {
            i.getPropertyData(this.toID(x, y)).then((r) => {
                return callback(x, y, r);
            }).catch((e) => {
                console.error(e);
            });
        });
    }

    // ---------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------------
    // ----------------------------------         GETTERS         ----------------------------------------------
    // ---------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------------



    // ---------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------------
    // ----------------------------------         EVENTS          ----------------------------------------------
    // ---------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------------

    /*
    Subscriber functions for gnereal updates.
    Events that are being used:
        Alerts
    */
    listenForResults(listener, key, callback) {
        this.listeners[listener][key] = callback;
    }

    stopListeningForResults(listener, key) {
        delete this.listeners[listener][key];
    }

    sendResults(listener, result) {
        Object.keys(this.listeners[listener]).map((i) => {
            this.listeners[listener][i](result);
        });
    }

    /*
    Subscriber functions for function call returns from events fired on the 
    contract.
    */
    listenForEvent(event, key, callback) {
        if (event !== EVENTS.AccountChange)
            console.error('No longer using events for contract events. Use get/watchEventLogs');
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

    // ---------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------------
    // ----------------------------------         EVENTS          ----------------------------------------------
    // ---------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------------
}

module.exports.instance = new Contract();
module.exports.EVENTS = EVENTS;