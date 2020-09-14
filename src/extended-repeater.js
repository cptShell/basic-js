const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes, separator = '+', addition = '', additionRepeatTimes, additionSeparator}) {
  if (typeof addition != "string") addition == null ? addition = "null" : typeof addition == "object" || addition.toString() == "false" ? addition = addition.toString('') : addition = "";
  
  return new Array(repeatTimes).fill(str + new Array(additionRepeatTimes).fill(addition).join(additionSeparator)).join(separator);
};