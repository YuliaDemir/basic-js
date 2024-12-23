const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let index = 0;
  for (let s of s1) {
    index = s2.indexOf(s);
    if (index >= 0) {
      s2 = s2.substring(0, index) + s2.substring(index + 1);
      count++;
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
