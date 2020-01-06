import { fetchApi } from './utils';

function fetchViralPokemonList() {
  return fetchApi('pokemon/viral', null, null);
}

function fetchMostViewedPokemonList() {
  // custom this to get your own list ;-)
  return fetchApi('pokemon/mostviewed', null, null);
}

export const listsService = {
  fetchViralPokemonList,
  fetchMostViewedPokemonList
};
