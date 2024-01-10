const buildMakePerson = ({ uuidAdapter, getAgeAdapter }) => {
  return ({ name, birthDate }) => {
    return {
      id: uuidAdapter(),
      name,
      birthDate,
      age: getAgeAdapter(birthDate),
    };
  }
};

module.exports = {
  buildMakePerson
};
