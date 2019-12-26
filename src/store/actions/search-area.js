import { searchService } from '../../services/search-service';

function searchChampName(name) {
  return async (dispatch, getState) => {
    try {
      if (!name) {
        dispatch({ type: 'SEARCH_CHAMP_NAME_SUCCESS', data: [] });
        return;
      }
      dispatch({ type: 'SEARCH_CHAMP_NAME_LOADING' });
      const response = await searchService.searchChampName(name);
      if (response.result) {
        dispatch({ type: 'SEARCH_CHAMP_NAME_SUCCESS', data: response.data });
        return;
      }
      dispatch({ type: 'SEARCH_CHAMP_NAME_ERROR', error: response });
    } catch (error) {
      dispatch({ type: 'SEARCH_CHAMP_NAME_ERROR', error: error });
    }
  };
}

export { searchChampName };
