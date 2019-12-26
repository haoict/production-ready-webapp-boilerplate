import { pokemonService } from '../../services/pokemon-service';

function fetchPokemonData(id) {
  return async (dispatch, getState) => {
    try {
      if (!id) {
        return;
      }
      dispatch({ type: 'FETCH_POKEMON_DATA_LOADING' });
      const response = await pokemonService.fetchPokemonData(id);
      if (response.result) {
        dispatch({ type: 'FETCH_POKEMON_DATA_SUCCESS', data: response.data });
        return;
      }
      dispatch({ type: 'FETCH_POKEMON_DATA_ERROR', error: response });
    } catch (error) {
      dispatch({ type: 'FETCH_POKEMON_DATA_ERROR', error: error });
    }
  };
}

export { fetchPokemonData };
