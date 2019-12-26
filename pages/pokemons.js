import { withTranslation } from '../src/helpers/i18n';
import PokemonViewContainer from '../src/container-components/pokemon-view';
import { fetchPokemonData } from '../src/store/actions/pokemon';

const Pokemons = props => {
  const { t } = props;
  return (
    <>
      <PokemonViewContainer />
    </>
  );
};

Pokemons.getInitialProps = async function(context) {
  const { id } = context.query;
  const namespacesRequired = ['common'];
  await context.store.dispatch(fetchPokemonData(id));
  return { namespacesRequired };
};

export default withTranslation()(Pokemons);
