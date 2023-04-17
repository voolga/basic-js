const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();

  if (month === 11 || month === 0 || month === 1) {
    return 'winter';
  } else if (month === 2 || month === 3 || month === 4) {
    return 'spring';
  } else if (month === 5 || month === 6 || month === 7) {
    return 'summer';
  } else {
    return 'autumn';
  }

}

module.exports = {
  getSeason
};
