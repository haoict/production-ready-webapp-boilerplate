import { combineReducers } from 'redux';
import { searchArea } from './search-area';
import { pokemonData } from './pokemon-data';
import { mostViewedPokemonList, viralPokemonList } from './lists';

export default combineReducers({
  searchArea,
  pokemonData,
  mostViewedPokemonList,
  viralPokemonList
});
