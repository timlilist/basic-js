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
  const arr = Array.from(str);
  let currentLeter = arr[0];
  let count = 1;
  let result = [];
  for (let i = 1; i <= arr.length; i += 1) {
    if (currentLeter === arr[i]) {
      count += 1;
    } else {
      if (count !== 1){
        result.push(count, currentLeter);
        currentLeter = arr[i];
        count = 1;
      } else {
        result.push(currentLeter);
        currentLeter = arr[i];
        count = 1;
      }
    }
  }
  return result.join('');
}

module.exports = {
  encodeLine
};
