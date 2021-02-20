import React from 'react';
import { connect } from 'react-redux';
import { wrapper } from '../src/store';
import { getPokemonData } from '../src/store/actions/pokemon-data';
import PokemonView from '../src/visual-components/pokemon-view';

const Pokemons = (props) => {
  const { isLoading, data, error } = props;
  return <PokemonView isLoading={isLoading} data={data} error={error} />;
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  await context.store.dispatch(getPokemonData(context.query.id));
});

const mapStateToProps = (state) => ({
  isLoading: state.pokemonData.isLoading,
  data: state.pokemonData.data,
  error: state.pokemonData.error
});

export default connect(mapStateToProps)(Pokemons);
