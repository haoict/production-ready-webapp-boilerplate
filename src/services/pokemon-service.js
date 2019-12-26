import { fetchApi } from './utils';

function fetchPokemonData(id) {
  return fetchApi('pokemon/', id);
}

export const pokemonService = {
  fetchPokemonData
};
