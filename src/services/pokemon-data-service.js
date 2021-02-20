import { fetchApi } from './utils';

function fetchPokemonData(id) {
  return fetchApi('pokemons/', id);
}

export const pokemonService = {
  fetchPokemonData
};
