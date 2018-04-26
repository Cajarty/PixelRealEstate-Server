var bigInt = require("big-integer");
var BigNumber = require('bignumber.js');
var Base64 = require('js-base64').Base64;

const HBITS = 5;
const HNUMBER = 32;
const SBITS = 4;
const SNUMBER = 16;
const LBITS = 3;
const LNUMBER = 8;
const CONTRACT_DATA_ARRAY_SIZE = 5;

const WeiToEth = (wei) => {
    return wei / 1000000000000000000.0;
}

const NumberWithCommas = (number) => {
    let parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

const NumberAbbreviated = (number) => {
    if (number >= 1000000000) {
       return (number / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (number >= 1000000) {
       return (number / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (number >= 1000) {
       return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return number;
}

const TimeSince = (date, to = false) => {
    let seconds = Math.floor((new Date() - date) / 1000);

    if (to)
        seconds = Math.abs(seconds);

    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

const Clamp = (min, max, value) => {
    return Math.max(min, Math.min(max, value));
}

const StringToBigInts = (string) => {
    let result = [];
    let innerResult = new bigInt("0", 10);
    for(let i = 0; i < 32; i++) {
      let binary = 32;
      if (i < string.length) {
        binary = string.charCodeAt(i);
      }
      innerResult = innerResult.shiftLeft(8);
      innerResult = innerResult.or(binary);
    }
    result.push(new BigNumber(innerResult.toString(), 10));
    innerResult = new bigInt("0", 10);
    for(let i = 32; i < 64; i++) {
      let binary = 32;
      if (i < string.length) {
        binary = string.charCodeAt(i);
      }
      innerResult = innerResult.shiftLeft(8);
      innerResult = innerResult.or(binary);
    }
    result.push(new BigNumber(innerResult.toString(), 10));
    return result;
  }

const BigIntsToString = (bigInts) => {
    let result = [];
    bigInts.reverse();
    for(let i = 0; i < 2; i++) {
        let uint256 = new bigInt(bigInts[i].toString(10), 10);
        if (uint256 != 0) {
            for(let j = 0; j < 32; j++) {
                let ascii = uint256.and(255).toJSNumber();
                if (ascii != 0) {
                  result.push(String.fromCharCode(ascii));
                }
                uint256 = uint256.shiftRight(8); 
            }
        }
    }
    return result.reverse().join("");
  }

const StringToHex = function(str) {
    str = utf8.encode(str);
    var hex = "";

    // remove \u0000 padding from either side
    str = str.replace(/^(?:\u0000)*/,'');
    str = str.split("").reverse().join("");
    str = str.replace(/^(?:\u0000)*/,'');
    str = str.split("").reverse().join("");

    for(var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        // if (code !== 0) {
        var n = code.toString(16);
        hex += n.length < 2 ? '0' + n : n;
        // }
    }

    return "0x" + hex;
};

const HexToString = function(hex) {
    //if (!isHexStrict(hex))
    //    throw new Error('The parameter "'+ hex +'" must be a valid HEX string.');

    var str = "";
    var code = 0;
    hex = hex.replace(/^0x/i,'');

    // remove 00 padding from either side
    hex = hex.replace(/^(?:00)*/,'');
    hex = hex.split("").reverse().join("");
    hex = hex.replace(/^(?:00)*/,'');
    hex = hex.split("").reverse().join("");

    var l = hex.length;

    for (var i=0; i < l; i+=2) {
        code = parseInt(hex.substr(i, 2), 16);
        // if (code !== 0) {
        str += String.fromCharCode(code);
        // }
    }

    return utf8.decode(str);
};

const BigNumberToNumber = (big) => {
    return big.toNumber();
}

const NumberToBigNumber = (num) => {
    return BigNumber(num);
}

const VisitPage = (path) => {
    browserHistory.push('/' + path);
}

const ImageDataToBase64 = ( /*obj[0..999][0..4000]*/ data) => {
    let result = {};
    for (let i = 0; i < Object.keys(data).length; i++) {
        result[i] = [];
        for (let p = 0; p < result[i].length; p += 4) {
            let a = data[i][p];
            for (let char = p + 1; char < p + 3; char++) {
                a = a << 8;
                a |= data[i][char];
            }
            result[i].push(Base64.btoa(a));
        }
        return result;
    }
}

const Base64ToImageData = ( /*obj[0..999][0..500]*/ data) => {   
    let result = {};

    for (let i = 0; i < Object.keys(data).length; i++) {
        result[i] = [];
        for (let p = 0; p < data[i].length; p++) {
            let tmp = [];
            let a = parseInt(Base64.atob(data[i][p]));
            tmp[2] = (a & 255 * 256 * 256) >> 16;
            tmp[1] = (a & 255 * 256) >> 8;
            tmp[0] = (a & 255);
            if (i == 0 && p == 1)
            result[i].push(tmp[2], tmp[1], tmp[0], 255);
        }
    }
    return result;
}

const ContractDataToRGBAArray = (/*uint256[5]*/ contractDataArray) => {
    let result = [];
    let pixelsPerBigInt = Math.floor(256 / (HBITS + SBITS + LBITS));
     
    for(let i = CONTRACT_DATA_ARRAY_SIZE - 1; i >= 0; i--) {
        let uint256 = bigInt(contractDataArray[i].toString(10), 10);
        for (let j = 0; j < pixelsPerBigInt; j++) {
            result.unshift(HNUMBER);
            result.unshift(uint256.and(HNUMBER).toJSNumber());
            uint256 = uint256.shiftRight(HBITS); 
            result.unshift(uint256.and(SNUMBER).toJSNumber());
            uint256 = uint256.shiftRight(SBITS);
            result.unshift(uint256.and(LNUMBER).toJSNumber());
            uint256 = uint256.shiftRight(LBITS);
        }
    }
    return result;
}

//Assumption: rgbArray is an array of rgb values for 100 pixels
const RGBArrayToContractData = (rgbArray) => {
    let result = [];
    let counter = 0;
    let pixelsPerBigInt = Math.floor(256 / (HBITS + SBITS + LBITS));
    for(let i = 0; i < CONTRACT_DATA_ARRAY_SIZE; i++) { //Foreach uint256 in uint256[10]
        let innerResult = new bigInt("0", 10);
        for(let j = 0; j < pixelsPerBigInt; j++) { //Foreach h, s, l bits for the uint256
            let binary = RGBToBinary(rgbArray[counter++], rgbArray[counter++], rgbArray[counter++]);
            counter++;
            innerResult = innerResult.shiftLeft(pixelsPerBigInt);
            innerResult = innerResult.or(binary);
        }
        result.push(new BigNumber(innerResult.toString(), 10));
    }
    return result;
}

const RGBToBinary = (r, g, b) => {
    let v = r;
    v = v << SBITS;
    v = v | g;
    v = v << LBITS;
    v = v | b;
    return v;
}

const BinaryToRGB = (value) => {
    let obj = { r: 0, g: 0, b: 0 };
    obj.b = LNUMBER;
    obj.g = Math.pow(2, SBITS + LBITS) - obj.b;
    obj.r = Math.pow(2, HBITS + SBITS + LBITS) - (obj.g + obj.b);

    obj.g = (obj.g & value) >> HBITS;
    obj.r = (obj.r & value) >> HBITS + SBITS;
    return obj;
}

const calculateEarnings = (lastUpdate, maxEarnings) => {
    let now = new Date().getTime();
    let maxTime = (lastUpdate + (maxEarnings * 60)) * 1000;
    let current = Math.min(now, maxTime);
    return Math.floor((current - (lastUpdate * 1000)) / 60000);
}


/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   Number  r       The red color value
 * @param   Number  g       The green color value
 * @param   Number  b       The blue color value
 * @return  Array           The HSL representation
 */
const RGBtoHSL = (r, g, b) => {
    r /= 255, g /= 255, b /= 255;
  
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
  
    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
  
      h /= 6;
    }
  
    return [ h, s, l ];
  }
  
  /**
   * Converts an HSL color value to RGB. Conversion formula
   * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
   * Assumes h, s, and l are contained in the set [0, 1] and
   * returns r, g, and b in the set [0, 255].
   *
   * @param   Number  h       The hue
   * @param   Number  s       The saturation
   * @param   Number  l       The lightness
   * @return  Array           The RGB representation
   */
const HSLtoRGB = (h, s, l) => {
    var r, g, b;
  
    if (s == 0) {
      r = g = b = l; // achromatic
    } else {
      function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      }
  
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
  
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
  
    return [ r * 255, g * 255, b * 255 ];
  }



module.exports.ImageDataToBase64 = ImageDataToBase64;
module.exports.Base64ToImageData = Base64ToImageData;

module.exports.ContractDataToRGBAArray = ContractDataToRGBAArray;
module.exports.RGBArrayToContractData = RGBArrayToContractData;

module.exports.RGBToBinary = RGBToBinary;
module.exports.BinaryToRGB = BinaryToRGB;

module.exports.BigNumberToNumber = BigNumberToNumber;