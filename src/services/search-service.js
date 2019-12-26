import { fetchApi } from './utils';

function searchChampName(name) {
  return fetchApi('lolchamps/search', null, { name });
}

export const searchService = {
  searchChampName
};
