import { itemService } from '../../services/item-service';

function fetchItemData(id) {
  return async (dispatch, getState) => {
    try {
      if (!id) {
        return;
      }
      dispatch({ type: 'FETCH_ITEM_DATA_LOADING' });
      const response = await itemService.fetchItemData(id);
      if (response.result) {
        dispatch({ type: 'FETCH_ITEM_DATA_SUCCESS', data: response.data });
        return;
      }
      dispatch({ type: 'FETCH_ITEM_DATA_ERROR', error: response });
    } catch (error) {
      dispatch({ type: 'FETCH_ITEM_DATA_ERROR', error: error });
    }
  };
}

export { fetchItemData };
