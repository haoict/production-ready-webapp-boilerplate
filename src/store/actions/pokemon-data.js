import { pokemonService } from '../../services/pokemon-data-service';

function getPokemonData(id) {
  return async (dispatch, getState) => {
    try {
      if (!id) {
        return;
      }
      dispatch({ type: 'GET_POKEMON_DATA_LOADING' });
      const response = await pokemonService.fetchPokemonData(id);
      if (response.result) {
        dispatch({ type: 'GET_POKEMON_DATA_SUCCESS', data: response.data });
        return;
      }
      dispatch({ type: 'GET_POKEMON_DATA_ERROR', error: response });
    } catch (error) {
      dispatch({ type: 'GET_POKEMON_DATA_ERROR', error: error });
    }
  };
}

export { getPokemonData };
