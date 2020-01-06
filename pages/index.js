import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from '../src/helpers/i18n';
import { getMostViewedPokemonList, getViralPokemonList } from '../src/store/actions/lists';
import Head from 'next/head';
import SearchAreaContainer from '../src/container-components/search-area';
import PokemonList from '../src/visual-components/pokemon-list';

class Index extends React.Component {
  isUnMounted = false;

  async componentDidMount() {
    // this will be rendered in client-side
    // for server-side render, use getInitialProps
    this.props.dispatch(getViralPokemonList());
  }

  componentWillUnmount() {
    this.isUnMounted = false;
  }

  render() {
    const {
      t,
      lang,
      mostViewedPokemonListIsLoading,
      mostViewedPokemonListData,
      mostViewedPokemonListError,
      viralPokemonListIsLoading,
      viralPokemonListData,
      viralPokemonListError
    } = this.props;
    const title = 'Pokémon - Catch them all!!';

    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>

        <div style={{ width: '70%', maxWidth: 350, margin: '0 auto 50px', textAlign: 'center' }}>
          <img src='/static/assets/images/pokedex-logo.png' alt='logo' style={{ width: '100%' }} />
        </div>

        <SearchAreaContainer lang={lang} />
        <br />

        <PokemonList
          lang={lang}
          data={mostViewedPokemonListData}
          isLoading={mostViewedPokemonListIsLoading}
          error={mostViewedPokemonListError}
          header={t('Most Viewed Pokémons')}
          showCount={false}
        />

        <PokemonList
          lang={lang}
          data={viralPokemonListData}
          isLoading={viralPokemonListIsLoading}
          error={viralPokemonListError}
          header={t('Viral Pokémons')}
          showCount={false}
        />
      </>
    );
  }
}

Index.getInitialProps = async function(context) {
  const namespacesRequired = ['common'];
  await context.store.dispatch(getMostViewedPokemonList());
  return { namespacesRequired };
};

const mapStateToProps = state => ({
  mostViewedPokemonListIsLoading: state.mostViewedPokemonList.isLoading,
  mostViewedPokemonListData: state.mostViewedPokemonList.data,
  mostViewedPokemonListError: state.mostViewedPokemonList.error,

  viralPokemonListIsLoading: state.viralPokemonList.isLoading,
  viralPokemonListData: state.viralPokemonList.data,
  viralPokemonListError: state.viralPokemonList.error
});

export default connect(mapStateToProps)(withTranslation()(Index));
