const { httpClientAdapter } = require('../adapters/http-client.adapter');

const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
  const pokemon = await httpClientAdapter.get(url);

  return pokemon.name;
  /* return fetch(url)
    .then(response => response.json())
    .then(pokemon => pokemon.name); */
};

module.exports = getPokemonById;