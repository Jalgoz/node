const getAge = require('get-age');

export const getAgeAdapter = (birthDate: string) => {
  if (!birthDate) return new Error('birthDate is required');

  return getAge(birthDate);
};
