import { fetchApi } from './utils';

function fetchItemData(id) {
  return fetchApi('lolchamps/', id);
}

export const itemService = {
  fetchItemData
};
