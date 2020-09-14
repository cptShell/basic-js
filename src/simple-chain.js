const CustomError = require("../extensions/custom-error");

const chainMaker = {
  currentChain : [], 
  getLength() {
    return this.currentChain.length;
  },
  addLink(value) {
    this.currentChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position == "number" || position > 0 || position < this.currentChain.length) {
      this.currentChain.splice(position-1, 1);
      return this;
    }
    this.currentChain = [];
    throw new Error('THROWN');
  },
  reverseChain() {
    this.currentChain.reverse();
    return this;
  },
  finishChain() {
    let totalChain = this.currentChain.join('~~');
    this.currentChain = [];
    return totalChain;
  }
};

module.exports = chainMaker;

//console.log(chainMaker.reverseChain().addLink({0: 'first', 1: 'second', 'length': 2}).addLink(new Map()).addLink(true).addLink(false).addLink("new").addLink(new Map()).addLink(false).reverseChain().reverseChain().reverseChain().removeLink(1).removeLink(4).removeLink(2).addLink(333).addLink(1).reverseChain().finishChain());