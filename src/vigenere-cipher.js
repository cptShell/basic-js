const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(isDirect = true) {
    this.reversed = !isDirect;
  }

  encrypt(str, key) {
    if(!str || !key) throw Error('');
    let res = '';
    key = key.toUpperCase();
    str = str.toUpperCase();
    if(this.reversed) str = str.split('').reverse().join('');
    let j = 0;
    for(let i = 0; i < str.length; ++i) {
      if(!/[A-Z]/.test(str[i])) res += str[i];
      else {
        res += String.fromCharCode('A'.charCodeAt(0) + (str.charCodeAt(i) + key.charCodeAt(j % key.length) - 2 * 'A'.charCodeAt(0)) % 26);
        ++j;
      }
    }
    return res;
  }    
  decrypt(str, key) {
    if(!str || !key) throw Error('');
    let res = '';
    key = key.toUpperCase();
    str = str.toUpperCase();
    if(this.reversed) str = str.split('').reverse().join('');
    let j = 0;
    for(let i = 0; i < str.length; ++i) {
      if(!/[A-Z]/.test(str[i])) res += str[i];
      else {
        res += String.fromCharCode('A'.charCodeAt(0) + (26 + str.charCodeAt(i) - key.charCodeAt(j % key.length)) % 26);
        ++j;
      }
    }
    return res;
  }
}

module.exports = VigenereCipheringMachine;
