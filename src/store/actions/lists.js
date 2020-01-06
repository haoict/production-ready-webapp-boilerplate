import { listsService } from '../../services/lists-service';

function getMostViewedPokemonList() {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: 'GET_MOST_VIEWED_POKEMON_LIST_LOADING' });
      const response = await listsService.fetchMostViewedPokemonList();
      if (response.result) {
        dispatch({ type: 'GET_MOST_VIEWED_POKEMON_LIST_SUCCESS', data: response.data });
        return;
      }
      dispatch({ type: 'GET_MOST_VIEWED_POKEMON_LIST_ERROR', error: response });
    } catch (error) {
      dispatch({ type: 'GET_MOST_VIEWED_POKEMON_LIST_ERROR', error: error });
    }
  };
}

function getViralPokemonList() {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: 'GET_VIRAL_POKEMON_LIST_LOADING' });
      const response = await listsService.fetchViralPokemonList();
      if (response.result) {
        dispatch({ type: 'GET_VIRAL_POKEMON_LIST_SUCCESS', data: response.data });
        return;
      }
      dispatch({ type: 'GET_VIRAL_POKEMON_LIST_ERROR', error: response });
    } catch (error) {
      dispatch({ type: 'GET_VIRAL_POKEMON_LIST_ERROR', error: error });
    }
  };
}

export { getMostViewedPokemonList, getViralPokemonList };
