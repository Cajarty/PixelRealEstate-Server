const contractEthereum = require('./contractEthereum');
const contractPolygon = require('./contractPolygon');
const contractSkale = require('./contractSkale');

class ContractManager {
    constructor() {
        this.contracts = {
            42: contractEthereum.instance,
            80001: contractPolygon.instance,
            43113: contractSkale.instance
        };
    }

    getContract(chainID) {
        return this.contracts[chainID];
    }
}

let cm = new ContractManager();
module.exports.contractManager = cm;