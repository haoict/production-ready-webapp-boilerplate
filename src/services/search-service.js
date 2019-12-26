import { fetchApi } from './utils';

function searchPokemonName(name, isfullsearch = false) {
  return fetchApi('pokemon/search', null, { name, isfullsearch });
}

export const searchService = {
  searchPokemonName
};
