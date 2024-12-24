const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	let arr = Array.from({ length: matrix.length }, () => Array(matrix[0].length).fill(0));
	let count = 0;
	for (let j = 0; j < matrix.length; j++) {
		for (let i = 0; i < matrix[0].length; i++) {			
			count = (matrix[j-1]?.[i-1] || 0) + (matrix[j-1]?.[i] || 0) + (matrix[j-1]?.[i+1] || 0) 
			+ (matrix[j][i-1] || 0) + (matrix[j][i+1] || 0)
			+ (matrix[j+1]?.[i-1] || 0) + (matrix[j+1]?.[i] || 0) + (matrix[j+1]?.[i+1] || 0);
			arr[j][i] = count;
		}
	}
	return arr;
}

module.exports = {
  minesweeper
};
