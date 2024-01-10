const getAge = require('get-age');

const getAgeAdapter = (birthDate) => {
  if (!birthDate) return new Error('birthDate is required');

  return getAge(birthDate);
};

module.exports = {
  getAgeAdapter
};