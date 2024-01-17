const { default: axios } = require('axios');

export const httpClientAdapter = {
  get: async (url: string) => {
    /* const response = await fetch(url);
    const data = await response.json(); */
    const response = await axios.get(url);
    const { data } = response;

    return data;
  },
};
