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
  const nonNegIndexes = arr.reduce((indexes, val, i) => {
    if (val !== -1) indexes.push(i);
    return indexes;
  }, []);

  const sorted = nonNegIndexes.map(i => arr[i]).sort((a, b) => a - b);

  for (let i = 0; i < nonNegIndexes.length; i++) {
    arr[nonNegIndexes[i]] = sorted[i];
  }

  return arr;
}

module.exports = {
  sortByHeight
};
