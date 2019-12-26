const initState = {
  isLoading: false,
  data: null,
  error: null
};

const searchArea = (state = initState, action) => {
  switch (action.type) {
    case 'SEARCH_POKEMON_NAME_LOADING':
      return { isLoading: true };
    case 'SEARCH_POKEMON_NAME_SUCCESS':
      return { isLoading: false, data: action.data };
    case 'SEARCH_POKEMON_NAME_ERROR':
      return { isLoading: false, error: action.error };
    default:
      return state;
  }
};

export { searchArea };
