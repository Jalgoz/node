const getAge = require('get-age');

export const getAgeAdapter = (birthDate: string) => {
  return new Date().getFullYear() - new Date(birthDate).getFullYear();
};
