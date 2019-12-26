const initState = {
  isLoading: false,
  data: null,
  error: null
};

const item = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_ITEM_DATA_LOADING':
      return { isLoading: true };
    case 'FETCH_ITEM_DATA_SUCCESS':
      return { isLoading: false, data: action.data };
    case 'FETCH_ITEM_DATA_ERROR':
      return { isLoading: false, error: action.error };
    default:
      return state;
  }
};

export { item };
