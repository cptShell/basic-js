const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arg) {
  return arg.flat(Infinity).reduce((res, item) => item == "^^" ? res + 1 : res, 0);
};
