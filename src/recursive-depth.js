const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    if(arr.find(item => Array.isArray(item))) return this.calculateDepth(arr.flat(1),depth+1);
    return depth;
  }
};