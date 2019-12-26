import React from 'react';
import { withTranslation } from '../src/helpers/i18n';
import Head from 'next/head';
import SearchAreaContainer from '../src/container-components/search-area';
import { listsService } from '../src/services/lists-service';
import PokemonList from '../src/visual-components/pokemon-list';

class Index extends React.Component {
  isUnMounted = false;
  state = {
    viralPokemons: []
  };

  async componentDidMount() {
    // this will be rendered in client-side
    // for server-side render, use getInitialProps
    // you can fetch and manipulate data as local state or use redux
    const viral = await listsService.getViralList();
    if (viral && viral.data && !this.isUnMounted) {
      this.setState({ viralPokemons: viral.data });
    }
  }

  componentWillUnmount() {
    this.isUnMounted = false;
  }

  render() {
    const { t, mostViewPokemon } = this.props;
    const { viralPokemons } = this.state;
    const title = 'Pokémon - Catch them all!!';
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>

        <div style={{ width: '70%', maxWidth: 350, margin: '0 auto 50px', textAlign: 'center' }}>
          <img src='/static/assets/images/pokedex-logo.png' alt='logo' style={{ width: '100%' }} />
        </div>

        <SearchAreaContainer />

        <br />

        <PokemonList data={mostViewPokemon} header={t('Most View Pokémons')} showCount={false} />

        <PokemonList data={viralPokemons} header={t('Viral Pokémons')} showCount={false} />
      </>
    );
  }
}

Index.getInitialProps = async function(context) {
  const namespacesRequired = ['common'];

  const mostView = await listsService.getMostViewList();
  let mostViewPokemon = [];
  if (mostView && mostView.data) {
    mostViewPokemon = mostView.data;
  }

  return { namespacesRequired, mostViewPokemon };
};

export default withTranslation()(Index);
