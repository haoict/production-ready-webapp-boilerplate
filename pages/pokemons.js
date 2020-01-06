import { withTranslation } from '../src/helpers/i18n';
import { connect } from 'react-redux';
import { getPokemonData } from '../src/store/actions/pokemon-data';
import Head from 'next/head';
import PokemonView from '../src/visual-components/pokemon-view';

const Pokemons = props => {
  const { t, isLoading, data, error } = props;
  return (
    <>
      <Head>{data && <title>{data.name.english}</title>}</Head>
      <PokemonView isLoading={isLoading} data={data} error={error} />
    </>
  );
};

Pokemons.getInitialProps = async function(context) {
  const { id } = context.query;
  const namespacesRequired = ['common'];
  await context.store.dispatch(getPokemonData(id));
  return { namespacesRequired };
};

const mapStateToProps = state => ({
  isLoading: state.pokemonData.isLoading,
  data: state.pokemonData.data,
  error: state.pokemonData.error
});

export default connect(mapStateToProps)(withTranslation()(Pokemons));
