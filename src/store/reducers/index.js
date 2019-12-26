import { combineReducers } from 'redux';
import { searchArea } from './search-area';
import { item } from './item';

export default combineReducers({
  searchArea,
  item
});
