import { combineReducers } from 'redux';
import { searchArea } from './search-area';
import { pokemonData } from './pokemon-data';
import { mostViewedPokemonList, viralPokemonList } from './lists';
import { HYDRATE } from 'next-redux-wrapper';

const combinedReducer = combineReducers({
  searchArea,
  pokemonData,
  mostViewedPokemonList,
  viralPokemonList
});

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export default rootReducer;
