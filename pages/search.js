import React from 'react';
import { connect } from 'react-redux';
import { wrapper } from '../src/store';
import { searchPokemonName } from '../src/store/actions/search-area';
import Head from 'next/head';
import PokemonList from '../src/visual-components/pokemon-list';

class Search extends React.Component {
  componentWillUnmount() {
    this.props.dispatch(searchPokemonName(''));
  }

  render() {
    const { isLoading, data, error } = this.props;
    const title = 'Search';
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no' />
        </Head>
        <PokemonList isLoading={isLoading} data={data} error={error} />
      </>
    );
  }
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  await context.store.dispatch(searchPokemonName(context.query.keyword, true));
});

const mapStateToProps = (state) => ({
  isLoading: state.searchArea.isLoading,
  data: state.searchArea.data,
  error: state.searchArea.error
});

export default connect(mapStateToProps)(Search);
