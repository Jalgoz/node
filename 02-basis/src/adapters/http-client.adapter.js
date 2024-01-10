const { default: axios } = require('axios');

const httpClientAdapter = {
  get: async (url) => {
    /* const response = await fetch(url);
    const data = await response.json(); */
    const response = await axios.get(url);
    const { data } = response;

    return data;
  },
};

module.exports = {
  httpClientAdapter,
};
