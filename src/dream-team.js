const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  return members.map((item => {
    if (typeof item != "string") {
      return item = "";
    } else {
      return item = item.replace(/\s+/g, '')[0].toUpperCase();
    }
  })).sort().join("");
};