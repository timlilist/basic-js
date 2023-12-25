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
  const rows = matrix.length;
  const columns = matrix[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    result.push([]);
    for (let j = 0; j < columns; j++) {
      let count = 0;
      for (let k = i - 1; k <= i + 1; k++) {
        for (let z = j - 1; z <= j + 1; z++) {
          if (k >= 0 && k < rows && z >= 0 && z < columns && !(k === i && z === j)) {
            if (matrix[k][z]) {
              count++;
            }
          }
        }
      }
      result[i].push(count);
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
