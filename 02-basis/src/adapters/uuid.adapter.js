const { v4: uuidv4 } = require('uuid');

const uuidAdapter = () => {
  return uuidv4();
};

module.exports = {
  uuidAdapter
};