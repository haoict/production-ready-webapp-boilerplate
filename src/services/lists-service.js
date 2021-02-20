import { fetchApi } from './utils';

function fetchViralPokemonList() {
  return fetchApi('viral', null, null);
}

function fetchMostViewedPokemonList() {
  // custom this to get your own list ;-)
  return fetchApi('mostviewed', null, null);
}

export const listsService = {
  fetchViralPokemonList,
  fetchMostViewedPokemonList
};
