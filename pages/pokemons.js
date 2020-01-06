import { withTranslation } from '../src/helpers/i18n';
import { connect } from 'react-redux';
import { getPokemonData } from '../src/store/actions/pokemon-data';
import PokemonView from '../src/visual-components/pokemon-view';

const Pokemons = props => {
  const { t, lang, isLoading, data, error } = props;
  return <PokemonView isLoading={isLoading} data={data} error={error} lang={lang} />;
};

Pokemons.getInitialProps = async function(context) {
  const { id } = context.query;
  const namespacesRequired = ['common'];
  if (context.req) {
    // if server side, wait for the request to finish, because we have to return html with full data
    await context.store.dispatch(getPokemonData(id));
  } else {
    // if it is client side, we don't have to wait for data to come
    // so when user click to pokemon page, client will navigate immediately
    context.store.dispatch(getPokemonData(id));
  }
  return { namespacesRequired };
};

const mapStateToProps = state => ({
  isLoading: state.pokemonData.isLoading,
  data: state.pokemonData.data,
  error: state.pokemonData.error
});

export default connect(mapStateToProps)(withTranslation()(Pokemons));
