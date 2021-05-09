

const PXL_Ethereum_Address = '0x9D9297429eA3caB6C67A1e3ac5ec5a216Aed36fe';
const VRE_Ethereum_Address = '0x963B1E68fC6d6522f2825D0DD2cb66444A56252F';

const VRE_Polygon_Address = '0xE3aC59C97cF6A6751C08EF084c40f98F0b70CA44';
const PXL_Polygon_Address = '0x100D847FD3CFD499527F92e65c1d6F28aa6B9b70';

const VRE_Skale_Address = '0xE3aC59C97cF6A6751C08EF084c40f98F0b70CA44';
const PXL_Skale_Address = '0x100D847FD3CFD499527F92e65c1d6F28aa6B9b70';

const PXL_Mainnet_Address = '0x9bc0b36cdedadb9ae906f53bdea6debe20b81b8e';
const VRE_Mainnet_Address = '0x89695d5b003EB6A546c1b6d3B272C36e423e9477';

const PXL_Mainnet_ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"burner","type":"address"},{"name":"toBurn","type":"uint256"},{"name":"rewarder1","type":"address"},{"name":"toReward1","type":"uint256"},{"name":"rewarder2","type":"address"},{"name":"toReward2","type":"uint256"}],"name":"burnPXLRewardPXLx2","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"},{"name":"lastUpdater","type":"address"},{"name":"lastUpdate","type":"uint256"}],"name":"setPropertyLastUpdaterLastUpdate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"propertyDAppContract","type":"address"},{"name":"giveAccess","type":"bool"}],"name":"setPropertyDAppContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"},{"name":"earnUntil","type":"uint256"}],"name":"setPropertyEarnUntil","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"propertyID","type":"uint16"}],"name":"getPropertySalePrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"propertyID","type":"uint16"}],"name":"getPropertyPrivateModeLastUpdateEarnUntil","outputs":[{"name":"","type":"bool"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"propertyID","type":"uint16"}],"name":"getPropertyLastUpdate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"rewardedUser","type":"address"},{"name":"amount","type":"uint256"}],"name":"rewardPXL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"burner","type":"address"},{"name":"toBurn","type":"uint256"},{"name":"rewarder","type":"address"},{"name":"toReward","type":"uint256"}],"name":"burnPXLRewardPXL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"propertyID","type":"uint16"}],"name":"getPropertyOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"propertyID","type":"uint16"}],"name":"getPropertyPrivateMode","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"},{"name":"row","type":"uint8"},{"name":"rowColor","type":"uint256"}],"name":"setPropertyRowColor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"},{"name":"lastUpdate","type":"uint256"}],"name":"setPropertyLastUpdate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"},{"name":"owner","type":"address"},{"name":"salePrice","type":"uint256"}],"name":"setPropertyOwnerSalePrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"},{"name":"isInPrivateMode","type":"bool"}],"name":"setPropertyPrivateMode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"textOwner","type":"address"},{"name":"hoverText","type":"uint256[2]"}],"name":"setOwnerHoverText","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"propertyID","type":"uint16"}],"name":"getPropertyLastUpdaterBecomePublic","outputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint16"}],"name":"properties","outputs":[{"name":"flag","type":"uint8"},{"name":"isInPrivateMode","type":"bool"},{"name":"owner","type":"address"},{"name":"lastUpdater","type":"address"},{"name":"salePrice","type":"uint256"},{"name":"lastUpdate","type":"uint256"},{"name":"becomePublic","type":"uint256"},{"name":"earnUntil","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"},{"name":"salePrice","type":"uint256"}],"name":"setPropertySalePrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"websiteOwner","type":"address"},{"name":"website","type":"uint256[2]"}],"name":"setOwnerLink","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"regulators","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"},{"name":"privateMode","type":"bool"},{"name":"earnUntil","type":"uint256"},{"name":"lastUpdate","type":"uint256"},{"name":"becomePublic","type":"uint256"}],"name":"setPropertyPrivateModeEarnUntilLastUpdateBecomePublic","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getOwnerHoverText","outputs":[{"name":"","type":"uint256[2]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"},{"name":"flag","type":"uint8"}],"name":"setPropertyFlag","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"},{"name":"accessLevel","type":"uint8"}],"name":"setRegulatorAccessLevel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"propertyID","type":"uint16"}],"name":"getPropertyFlag","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"propertyID","type":"uint16"}],"name":"getPropertyEarnUntil","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"propertiesToCopy","type":"uint16[10]"}],"name":"migratePropertyOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"propertyID","type":"uint16"}],"name":"getPropertyPrivateModeBecomePublic","outputs":[{"name":"","type":"bool"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"},{"name":"becomePublic","type":"uint256"}],"name":"setPropertyBecomePublic","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"propertyID","type":"uint16"},{"name":"systemSalePriceETH","type":"uint256"},{"name":"systemSalePricePXL","type":"uint256"}],"name":"getPropertyData","outputs":[{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"bool"},{"name":"","type":"uint256"},{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"},{"name":"owner","type":"address"},{"name":"salePrice","type":"uint256"},{"name":"privateMode","type":"bool"},{"name":"flag","type":"uint8"}],"name":"setPropertyOwnerSalePricePrivateModeFlag","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"propertyID","type":"uint16"}],"name":"getPropertyLastUpdater","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getRegulatorLevel","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"},{"name":"lastUpdater","type":"address"}],"name":"setPropertyLastUpdater","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"},{"name":"becomePublic","type":"uint256"},{"name":"earnUntil","type":"uint256"}],"name":"setPropertyBecomePublicEarnUntil","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"propertyID","type":"uint16"},{"name":"rowIndex","type":"uint8"}],"name":"getPropertyColorsOfRow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newPixelPropertyContract","type":"address"}],"name":"setPixelPropertyContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"propertyID","type":"uint16"}],"name":"getPropertyOwnerSalePrice","outputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"},{"name":"propertyOwner","type":"address"}],"name":"setPropertyOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"endMigrationPeriod","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"ownerWebsite","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"propertyID","type":"uint16"}],"name":"getPropertyColors","outputs":[{"name":"","type":"uint256[5]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"},{"name":"colors","type":"uint256[5]"}],"name":"setPropertyColors","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getOwnerLink","outputs":[{"name":"","type":"uint256[2]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"usersToMigrate","type":"address[10]"}],"name":"migrateUsers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"burningUser","type":"address"},{"name":"amount","type":"uint256"}],"name":"burnPXL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"ownerHoverText","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"propertyID","type":"uint16"}],"name":"getPropertyBecomePublic","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"oldAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}];
const VRE_Mainnet_ABI = [{"constant":true,"inputs":[{"name":"propertyID","type":"uint16"}],"name":"getPropertyData","outputs":[{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"bool"},{"name":"","type":"uint256"},{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"}],"name":"buyPropertyInETH","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"},{"name":"row","type":"uint8"},{"name":"newColorData","type":"uint256"},{"name":"PXLToSpend","type":"uint256"}],"name":"setRowColors","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"propertyID","type":"uint16"}],"name":"getProjectedPayout","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"},{"name":"newOwner","type":"address"}],"name":"transferProperty","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"}],"name":"tryForcePublic","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"},{"name":"PXLValue","type":"uint256"}],"name":"buyPropertyInPXL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"},{"name":"newColors","type":"uint256[5]"},{"name":"PXLToSpend","type":"uint256"}],"name":"setColors","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"propertyIDs","type":"uint16[8]"},{"name":"newColors","type":"uint256[40]"},{"name":"PXLToSpendEach","type":"uint256"}],"name":"setColorsX8","outputs":[{"name":"","type":"bool[8]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pxlPropertyContract","type":"address"}],"name":"setPXLPropertyContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"propertyIsInPrivateMode","type":"bool"},{"name":"propertyLastUpdate","type":"uint256"},{"name":"propertyEarnUntil","type":"uint256"}],"name":"getProjectedPayout","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdrawAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"propertyIDs","type":"uint16[4]"},{"name":"newColors","type":"uint256[20]"},{"name":"PXLToSpendEach","type":"uint256"}],"name":"setColorsX4","outputs":[{"name":"","type":"bool[4]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"},{"name":"setPrivateMode","type":"bool"},{"name":"numMinutesPrivate","type":"uint32"}],"name":"setPropertyMode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getSystemSalePrices","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"text","type":"uint256[2]"}],"name":"setHoverText","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"},{"name":"bidAmount","type":"uint256"}],"name":"makeBid","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"},{"name":"price","type":"uint256"}],"name":"listForSale","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"propertyID","type":"uint16"}],"name":"getForSalePrices","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"}],"name":"delist","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isInGracePeriod","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"website","type":"uint256[2]"}],"name":"setLink","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"changeOwners","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"propertyID","type":"uint16"},{"name":"pxlValue","type":"uint256"}],"name":"buyProperty","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getSaleInformation","outputs":[{"name":"","type":"uint8"},{"name":"","type":"uint8"},{"name":"","type":"uint16"},{"name":"","type":"uint16"},{"name":"","type":"uint16"},{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"property","type":"uint16"},{"indexed":false,"name":"colors","type":"uint256[5]"},{"indexed":false,"name":"lastUpdate","type":"uint256"},{"indexed":true,"name":"lastUpdaterPayee","type":"address"},{"indexed":false,"name":"becomePublic","type":"uint256"},{"indexed":true,"name":"rewardedCoins","type":"uint256"}],"name":"PropertyColorUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"property","type":"uint16"},{"indexed":true,"name":"newOwner","type":"address"},{"indexed":false,"name":"ethAmount","type":"uint256"},{"indexed":false,"name":"PXLAmount","type":"uint256"},{"indexed":false,"name":"timestamp","type":"uint256"},{"indexed":true,"name":"oldOwner","type":"address"}],"name":"PropertyBought","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"newHoverText","type":"uint256[2]"}],"name":"SetUserHoverText","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"newLink","type":"uint256[2]"}],"name":"SetUserSetLink","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"property","type":"uint16"},{"indexed":false,"name":"forSalePrice","type":"uint256"}],"name":"PropertySetForSale","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"property","type":"uint16"}],"name":"DelistProperty","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"property","type":"uint16"}],"name":"SetPropertyPublic","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"property","type":"uint16"},{"indexed":false,"name":"numMinutesPrivate","type":"uint32"},{"indexed":true,"name":"rewardedUser","type":"address"},{"indexed":true,"name":"rewardedCoins","type":"uint256"}],"name":"SetPropertyPrivate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"property","type":"uint16"},{"indexed":false,"name":"bid","type":"uint256"},{"indexed":false,"name":"timestamp","type":"uint256"}],"name":"Bid","type":"event"}];

const PXL_Ethereum_ABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "bridgePXLStartingAmount",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "previousAdminRole",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "newAdminRole",
                "type": "bytes32"
            }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleGranted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleRevoked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "Snapshot",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "DOMAIN_SEPARATOR",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "snapshotId",
                "type": "uint256"
            }
        ],
        "name": "balanceOfAt",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "burnFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "burningUser",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "burnPXL",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "burner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "toBurn",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "rewarder",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "toReward",
                "type": "uint256"
            }
        ],
        "name": "burnPXLRewardPXL",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "burner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "toBurn",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "rewarder1",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "toReward1",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "rewarder2",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "toReward2",
                "type": "uint256"
            }
        ],
        "name": "burnPXLRewardPXLx2",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "getOwnerHoverText",
        "outputs": [
            {
                "internalType": "uint256[2]",
                "name": "",
                "type": "uint256[2]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "getOwnerLink",
        "outputs": [
            {
                "internalType": "uint256[2]",
                "name": "",
                "type": "uint256[2]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getPropertyBecomePublic",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getPropertyColors",
        "outputs": [
            {
                "internalType": "uint256[5]",
                "name": "",
                "type": "uint256[5]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "uint8",
                "name": "rowIndex",
                "type": "uint8"
            }
        ],
        "name": "getPropertyColorsOfRow",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "systemSalePriceETH",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "systemSalePricePXL",
                "type": "uint256"
            }
        ],
        "name": "getPropertyData",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getPropertyEarnUntil",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getPropertyFlag",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getPropertyLastUpdate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getPropertyLastUpdater",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getPropertyLastUpdaterBecomePublic",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getPropertyOwner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getPropertyOwnerSalePrice",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getPropertyPrivateMode",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getPropertyPrivateModeBecomePublic",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getPropertyPrivateModeLastUpdateEarnUntil",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getPropertySalePrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleAdmin",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "hasRole",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "nonces",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "ownerHoverText",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "ownerWebsite",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "v",
                "type": "uint8"
            },
            {
                "internalType": "bytes32",
                "name": "r",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "s",
                "type": "bytes32"
            }
        ],
        "name": "permit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "name": "properties",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "flag",
                "type": "uint8"
            },
            {
                "internalType": "bool",
                "name": "isInPrivateMode",
                "type": "bool"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "lastUpdater",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "salePrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "lastUpdate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "becomePublic",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "earnUntil",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "rewardedUser",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "rewardPXL",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "textOwner",
                "type": "address"
            },
            {
                "internalType": "uint256[2]",
                "name": "hoverText",
                "type": "uint256[2]"
            }
        ],
        "name": "setOwnerHoverText",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "websiteOwner",
                "type": "address"
            },
            {
                "internalType": "uint256[2]",
                "name": "website",
                "type": "uint256[2]"
            }
        ],
        "name": "setOwnerLink",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newPixelPropertyContract",
                "type": "address"
            }
        ],
        "name": "setPixelPropertyContract",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "becomePublic",
                "type": "uint256"
            }
        ],
        "name": "setPropertyBecomePublic",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "becomePublic",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "earnUntil",
                "type": "uint256"
            }
        ],
        "name": "setPropertyBecomePublicEarnUntil",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "uint256[5]",
                "name": "colors",
                "type": "uint256[5]"
            }
        ],
        "name": "setPropertyColors",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "propertyDAppContract",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "giveAccess",
                "type": "bool"
            }
        ],
        "name": "setPropertyDAppContract",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "earnUntil",
                "type": "uint256"
            }
        ],
        "name": "setPropertyEarnUntil",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "uint8",
                "name": "flag",
                "type": "uint8"
            }
        ],
        "name": "setPropertyFlag",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "lastUpdate",
                "type": "uint256"
            }
        ],
        "name": "setPropertyLastUpdate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "address",
                "name": "lastUpdater",
                "type": "address"
            }
        ],
        "name": "setPropertyLastUpdater",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "address",
                "name": "lastUpdater",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "lastUpdate",
                "type": "uint256"
            }
        ],
        "name": "setPropertyLastUpdaterLastUpdate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "address",
                "name": "propertyOwner",
                "type": "address"
            }
        ],
        "name": "setPropertyOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "salePrice",
                "type": "uint256"
            }
        ],
        "name": "setPropertyOwnerSalePrice",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "salePrice",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "privateMode",
                "type": "bool"
            },
            {
                "internalType": "uint8",
                "name": "flag",
                "type": "uint8"
            }
        ],
        "name": "setPropertyOwnerSalePricePrivateModeFlag",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "bool",
                "name": "isInPrivateMode",
                "type": "bool"
            }
        ],
        "name": "setPropertyPrivateMode",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "bool",
                "name": "privateMode",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "earnUntil",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "lastUpdate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "becomePublic",
                "type": "uint256"
            }
        ],
        "name": "setPropertyPrivateModeEarnUntilLastUpdateBecomePublic",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "uint8",
                "name": "row",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "rowColor",
                "type": "uint256"
            }
        ],
        "name": "setPropertyRowColor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "salePrice",
                "type": "uint256"
            }
        ],
        "name": "setPropertySalePrice",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "snapshot",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "snapshotId",
                "type": "uint256"
            }
        ],
        "name": "totalSupplyAt",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const VRE_Ethereum_ABI = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "uri_",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "virtualRealEstateV1",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "pxlPropertyContract",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint16",
                "name": "property",
                "type": "uint16"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "bid",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "Bid",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint16",
                "name": "property",
                "type": "uint16"
            }
        ],
        "name": "DelistProperty",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint16",
                "name": "property",
                "type": "uint16"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "nativeAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "PXLAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "oldOwner",
                "type": "address"
            }
        ],
        "name": "PropertyBought",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint16",
                "name": "property",
                "type": "uint16"
            },
            {
                "indexed": false,
                "internalType": "uint256[5]",
                "name": "colors",
                "type": "uint256[5]"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "lastUpdate",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "lastUpdaterPayee",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "becomePublic",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "rewardedCoins",
                "type": "uint256"
            }
        ],
        "name": "PropertyColorUpdate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint16",
                "name": "property",
                "type": "uint16"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "forSalePrice",
                "type": "uint256"
            }
        ],
        "name": "PropertySetForSale",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint16",
                "name": "property",
                "type": "uint16"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "numMinutesPrivate",
                "type": "uint32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "rewardedUser",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "rewardedCoins",
                "type": "uint256"
            }
        ],
        "name": "SetPropertyPrivate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint16",
                "name": "property",
                "type": "uint16"
            }
        ],
        "name": "SetPropertyPublic",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256[2]",
                "name": "newHoverText",
                "type": "uint256[2]"
            }
        ],
        "name": "SetUserHoverText",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256[2]",
                "name": "newLink",
                "type": "uint256[2]"
            }
        ],
        "name": "SetUserSetLink",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
            },
            {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            }
        ],
        "name": "TransferBatch",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "TransferSingle",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "value",
                "type": "string"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "URI",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "accounts",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
            }
        ],
        "name": "balanceOfBatch",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "pxlValue",
                "type": "uint256"
            }
        ],
        "name": "buyProperty",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "buyPropertyInETH",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "PXLValue",
                "type": "uint256"
            }
        ],
        "name": "buyPropertyInPXL",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "changeOwners",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "delist",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getForSalePrices",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getProjectedPayout",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "propertyIsInPrivateMode",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "propertyLastUpdate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "propertyEarnUntil",
                "type": "uint256"
            }
        ],
        "name": "getProjectedPayout",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getPropertyData",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSaleInformation",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            },
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            },
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            },
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            },
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            },
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSystemSalePrices",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            }
        ],
        "name": "listForSale",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "bidAmount",
                "type": "uint256"
            }
        ],
        "name": "makeBid",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeBatchTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "uint256[5]",
                "name": "newColors",
                "type": "uint256[5]"
            },
            {
                "internalType": "uint256",
                "name": "PXLToSpend",
                "type": "uint256"
            }
        ],
        "name": "setColors",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16[4]",
                "name": "propertyIDs",
                "type": "uint16[4]"
            },
            {
                "internalType": "uint256[20]",
                "name": "newColors",
                "type": "uint256[20]"
            },
            {
                "internalType": "uint256",
                "name": "PXLToSpendEach",
                "type": "uint256"
            }
        ],
        "name": "setColorsX4",
        "outputs": [
            {
                "internalType": "bool[4]",
                "name": "",
                "type": "bool[4]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16[8]",
                "name": "propertyIDs",
                "type": "uint16[8]"
            },
            {
                "internalType": "uint256[40]",
                "name": "newColors",
                "type": "uint256[40]"
            },
            {
                "internalType": "uint256",
                "name": "PXLToSpendEach",
                "type": "uint256"
            }
        ],
        "name": "setColorsX8",
        "outputs": [
            {
                "internalType": "bool[8]",
                "name": "",
                "type": "bool[8]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256[2]",
                "name": "text",
                "type": "uint256[2]"
            }
        ],
        "name": "setHoverText",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256[2]",
                "name": "website",
                "type": "uint256[2]"
            }
        ],
        "name": "setLink",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "pxlPropertyContract",
                "type": "address"
            }
        ],
        "name": "setPXLPropertyContract",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "bool",
                "name": "setPrivateMode",
                "type": "bool"
            },
            {
                "internalType": "uint32",
                "name": "numMinutesPrivate",
                "type": "uint32"
            }
        ],
        "name": "setPropertyMode",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "uint8",
                "name": "row",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "newColorData",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "PXLToSpend",
                "type": "uint256"
            }
        ],
        "name": "setRowColors",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferProperty",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "tryForcePublic",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "uri",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const VRE_Polygon_ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "pxlPropertyContract",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint16",
                "name": "property",
                "type": "uint16"
            },
            {
                "indexed": false,
                "internalType": "uint256[5]",
                "name": "colors",
                "type": "uint256[5]"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "lastUpdate",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "lastUpdaterPayee",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "becomePublic",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "rewardedCoins",
                "type": "uint256"
            }
        ],
        "name": "PropertyColorUpdate",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "changeOwners",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getProjectedPayout",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "propertyIsInPrivateMode",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "propertyLastUpdate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "propertyEarnUntil",
                "type": "uint256"
            }
        ],
        "name": "getProjectedPayout",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "uint256[5]",
                "name": "newColors",
                "type": "uint256[5]"
            },
            {
                "internalType": "uint256",
                "name": "PXLToSpend",
                "type": "uint256"
            }
        ],
        "name": "setColors",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16[4]",
                "name": "propertyIDs",
                "type": "uint16[4]"
            },
            {
                "internalType": "uint256[20]",
                "name": "newColors",
                "type": "uint256[20]"
            },
            {
                "internalType": "uint256",
                "name": "PXLToSpendEach",
                "type": "uint256"
            }
        ],
        "name": "setColorsX4",
        "outputs": [
            {
                "internalType": "bool[4]",
                "name": "",
                "type": "bool[4]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16[8]",
                "name": "propertyIDs",
                "type": "uint16[8]"
            },
            {
                "internalType": "uint256[40]",
                "name": "newColors",
                "type": "uint256[40]"
            },
            {
                "internalType": "uint256",
                "name": "PXLToSpendEach",
                "type": "uint256"
            }
        ],
        "name": "setColorsX8",
        "outputs": [
            {
                "internalType": "bool[8]",
                "name": "",
                "type": "bool[8]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "pxlPropertyContract",
                "type": "address"
            }
        ],
        "name": "setPXLPropertyContract",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "uint8",
                "name": "row",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "newColorData",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "PXLToSpend",
                "type": "uint256"
            }
        ],
        "name": "setRowColors",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferPropertyPXL",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];


const PXL_Polygon_ABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "bridgePXLStartingAmount",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "previousAdminRole",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "newAdminRole",
                "type": "bytes32"
            }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleGranted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleRevoked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "Snapshot",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "DOMAIN_SEPARATOR",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "snapshotId",
                "type": "uint256"
            }
        ],
        "name": "balanceOfAt",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "burnFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "burningUser",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "burnPXL",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "burner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "toBurn",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "rewarder",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "toReward",
                "type": "uint256"
            }
        ],
        "name": "burnPXLRewardPXL",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "burner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "toBurn",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "rewarder1",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "toReward1",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "rewarder2",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "toReward2",
                "type": "uint256"
            }
        ],
        "name": "burnPXLRewardPXLx2",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getPropertyBecomePublic",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getPropertyColors",
        "outputs": [
            {
                "internalType": "uint256[5]",
                "name": "",
                "type": "uint256[5]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "uint8",
                "name": "rowIndex",
                "type": "uint8"
            }
        ],
        "name": "getPropertyColorsOfRow",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getPropertyEarnUntil",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getPropertyFlag",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getPropertyLastUpdate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getPropertyLastUpdater",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getPropertyLastUpdaterBecomePublic",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getPropertyPrivateMode",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            }
        ],
        "name": "getPropertyPrivateModeLastUpdateEarnUntil",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleAdmin",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "hasRole",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "nonces",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "v",
                "type": "uint8"
            },
            {
                "internalType": "bytes32",
                "name": "r",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "s",
                "type": "bytes32"
            }
        ],
        "name": "permit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "name": "properties",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "flag",
                "type": "uint8"
            },
            {
                "internalType": "bool",
                "name": "isInPrivateMode",
                "type": "bool"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "lastUpdater",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "salePrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "lastUpdate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "becomePublic",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "earnUntil",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "rewardedUser",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "rewardPXL",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newPixelPropertyContract",
                "type": "address"
            }
        ],
        "name": "setPixelPropertyContract",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "becomePublic",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "earnUntil",
                "type": "uint256"
            }
        ],
        "name": "setPropertyBecomePublicEarnUntil",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "uint256[5]",
                "name": "colors",
                "type": "uint256[5]"
            }
        ],
        "name": "setPropertyColors",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "propertyDAppContract",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "giveAccess",
                "type": "bool"
            }
        ],
        "name": "setPropertyDAppContract",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "earnUntil",
                "type": "uint256"
            }
        ],
        "name": "setPropertyEarnUntil",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "uint8",
                "name": "flag",
                "type": "uint8"
            }
        ],
        "name": "setPropertyFlag",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "lastUpdate",
                "type": "uint256"
            }
        ],
        "name": "setPropertyLastUpdate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "address",
                "name": "lastUpdater",
                "type": "address"
            }
        ],
        "name": "setPropertyLastUpdater",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "address",
                "name": "lastUpdater",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "lastUpdate",
                "type": "uint256"
            }
        ],
        "name": "setPropertyLastUpdaterLastUpdate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "bool",
                "name": "isInPrivateMode",
                "type": "bool"
            }
        ],
        "name": "setPropertyPrivateMode",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "bool",
                "name": "privateMode",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "earnUntil",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "lastUpdate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "becomePublic",
                "type": "uint256"
            }
        ],
        "name": "setPropertyPrivateModeEarnUntilLastUpdateBecomePublic",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "propertyID",
                "type": "uint16"
            },
            {
                "internalType": "uint8",
                "name": "row",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "rowColor",
                "type": "uint256"
            }
        ],
        "name": "setPropertyRowColor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "snapshot",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "snapshotId",
                "type": "uint256"
            }
        ],
        "name": "totalSupplyAt",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const VRE_Skale_ABI = VRE_Polygon_ABI;

const PXL_Skale_ABI = PXL_Polygon_ABI;

module.exports.VRE_Mainnet_Address = VRE_Mainnet_Address;
module.exports.VRE_Mainnet_ABI = VRE_Mainnet_ABI;
module.exports.PXL_Mainnet_Address = PXL_Mainnet_Address;
module.exports.PXL_Mainnet_ABI = PXL_Mainnet_ABI;


module.exports.VRE_Ethereum_Address = VRE_Ethereum_Address;
module.exports.VRE_Ethereum_ABI = VRE_Ethereum_ABI;
module.exports.PXL_Ethereum_Address = PXL_Ethereum_Address;
module.exports.PXL_Ethereum_ABI = PXL_Ethereum_ABI;

module.exports.VRE_Polygon_Address = VRE_Polygon_Address;
module.exports.VRE_Polygon_ABI = VRE_Polygon_ABI;
module.exports.PXL_Polygon_Address = PXL_Polygon_Address;
module.exports.PXL_Polygon_ABI = PXL_Polygon_ABI;

module.exports.VRE_Skale_Address = VRE_Skale_Address;
module.exports.VRE_Skale_ABI = VRE_Skale_ABI;
module.exports.PXL_Skale_Address = PXL_Skale_Address;
module.exports.PXL_Skale_ABI = PXL_Skale_ABI;