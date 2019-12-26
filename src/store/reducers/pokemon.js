const initState = {
  isLoading: false,
  data: null,
  error: null
};

const pokemon = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_POKEMON_DATA_LOADING':
      return { isLoading: true };
    case 'FETCH_POKEMON_DATA_SUCCESS':
      return { isLoading: false, data: action.data };
    case 'FETCH_POKEMON_DATA_ERROR':
      return { isLoading: false, error: action.error };
    default:
      return state;
  }
};

export { pokemon };
