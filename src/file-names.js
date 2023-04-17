const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const usedNames = {};
  const result = [];

  for (let name of names) {
    if (!usedNames[name]) {
      // name not used yet
      usedNames[name] = 1;
      result.push(name);
    } else {
      // name already used, find a new name
      let newName = name + '(' + usedNames[name] + ')';
      while (usedNames[newName]) {
        usedNames[name] += 1;
        newName = name + '(' + usedNames[name] + ')';
      }
      usedNames[newName] = 1;
      result.push(newName);
    }
    usedNames[name] = 1;
  }

  return result;
}

module.exports = {
  renameFiles
};
