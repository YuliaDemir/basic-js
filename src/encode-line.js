const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return "";
  return str.match(/([\w])\1*/g)
			.map(array => (array.length > 1 ? array.length : "") + array[0])
			.reduce((acc, cur) => acc + cur,"");
}

module.exports = {
  encodeLine
};
