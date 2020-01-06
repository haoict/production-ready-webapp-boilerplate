const initState = {
  isLoading: false,
  data: null,
  error: null
};

const pokemonData = (state = initState, action) => {
  switch (action.type) {
    case 'GET_POKEMON_DATA_LOADING':
      return { isLoading: true };
    case 'GET_POKEMON_DATA_SUCCESS':
      return { isLoading: false, data: action.data };
    case 'GET_POKEMON_DATA_ERROR':
      return { isLoading: false, error: action.error };
    default:
      return state;
  }
};

export { pokemonData };
