const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let tempArr = Array(arr.length);
  for (let index in arr) {
    if (arr[index] !== -1) {
      tempArr[index] = arr[index];
    }
  }
  tempArr.sort((a, b) => a - b);
  let j = 0;
  for (let index in arr) {
    if (arr[index] !== -1) {
      arr[index] = tempArr[j++];
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
