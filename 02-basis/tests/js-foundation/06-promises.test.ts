import { getPokemonById } from '../../src/js-foundation/06-promises';

describe('Test in 06-promises', () => {
  it('getPokemonById should return a pokemon', async () => {
    const pokemonId = 1;
    const pokemonName = await getPokemonById(pokemonId);

    expect(pokemonName).toBe('bulbasaur');
  });

  it('should return and error if pokemon does not exist', async () => {
    const pokemonId = 10000000;

    try {
      await getPokemonById(pokemonId);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
    }
  });
});
