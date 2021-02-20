import { fetchApi } from './utils';

function searchPokemonName(name, isfullsearch = false) {
  return fetchApi('search', null, { name, isfullsearch });
}

export const searchService = {
  searchPokemonName
};
