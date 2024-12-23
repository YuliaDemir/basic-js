const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let number = 0;
	let str = String(n);
	let strCurrent = String(n);
	for (let digit in str) {
		strCurrent = str.substring(0, Number(digit)) + str.substring(Number(digit) + 1);
		if (Number(strCurrent) > number) {
			number = Number(strCurrent);
		}
	}
	return number;
}

module.exports = {
  deleteDigit
};
