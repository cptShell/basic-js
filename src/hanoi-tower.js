const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let _turns = Math.pow(2, disksNumber) - 1;
  
  return {turns: _turns, seconds: Math.floor((3600 * _turns) / turnsSpeed) }
};
