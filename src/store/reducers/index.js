import { combineReducers } from 'redux';
import { searchArea } from './search-area';
import { pokemon } from './pokemon';

export default combineReducers({
  searchArea,
  pokemon
});
