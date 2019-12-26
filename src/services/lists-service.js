import { fetchApi } from './utils';

function getViralList(name) {
  return fetchApi('pokemon/random', null, null);
}

function getMostViewList(name) {
  // custom this to get your own list ;-)
  return fetchApi('pokemon/random', null, null);
}

export const listsService = {
  getViralList,
  getMostViewList
};
