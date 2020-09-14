const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || Object.keys(date).length) throw new Error('THROWN');
  
  let month = date.getMonth();
  const seasоns = ["winter", "winter", "spring", "spring", "spring", "summer", "summer", "summer", "fall", "fall", "fall", "winter"];

  if(month >= 0 && month < 12) return seasоns[month];
}

