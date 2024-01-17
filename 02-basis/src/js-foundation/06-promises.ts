import { httpClientAdapter } from '../adapters';

export const getPokemonById = async (id: number | number): Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemon = await httpClientAdapter.get(url);

  return pokemon.name;
  /* return fetch(url)
    .then(response => response.json())
    .then(pokemon => pokemon.name); */
};
