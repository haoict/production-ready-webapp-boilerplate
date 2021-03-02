import { searchService } from '../../services/search-service';

function searchPokemonName(name, isfullsearch = false) {
  // eslint-disable-next-line no-unused-vars
  return async (dispatch, getState) => {
    try {
      if (!name) {
        dispatch({ type: 'SEARCH_POKEMON_NAME_SUCCESS', data: [] });
        return;
      }
      dispatch({ type: 'SEARCH_POKEMON_NAME_LOADING' });
      const response = await searchService.searchPokemonName(name, isfullsearch);
      if (response.result) {
        dispatch({ type: 'SEARCH_POKEMON_NAME_SUCCESS', data: response.data });
        return;
      }
      dispatch({ type: 'SEARCH_POKEMON_NAME_ERROR', error: 'No data' });
    } catch (error) {
      dispatch({ type: 'SEARCH_POKEMON_NAME_ERROR', error });
    }
  };
}

export { searchPokemonName };
