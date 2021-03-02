const initState = {
  isLoading: false,
  data: null,
  error: null
};

const mostViewedPokemonList = (state = initState, action) => {
  switch (action.type) {
    case 'GET_MOST_VIEWED_POKEMON_LIST_LOADING':
      return { isLoading: true };
    case 'GET_MOST_VIEWED_POKEMON_LIST_SUCCESS':
      return { isLoading: false, data: action.data };
    case 'GET_MOST_VIEWED_POKEMON_LIST_ERROR':
      return { isLoading: false, error: {}};
    default:
      return state;
  }
};

const viralPokemonList = (state = initState, action) => {
  switch (action.type) {
    case 'GET_VIRAL_POKEMON_LIST_LOADING':
      return { isLoading: true };
    case 'GET_VIRAL_POKEMON_LIST_SUCCESS':
      return { isLoading: false, data: action.data };
    case 'GET_VIRAL_POKEMON_LIST_ERROR':
      return { isLoading: false, error: action.error };
    default:
      return state;
  }
};

export { mostViewedPokemonList, viralPokemonList };
