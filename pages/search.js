import React from 'react';
import { connect } from 'react-redux';
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
        </Head>
        <PokemonList isLoading={isLoading} data={data} error={error} />
      </>
    );
  }
}

Search.getInitialProps = async function(context) {
  const { keyword } = context.query;
  if (context.req) {
    // if server side, wait for the request to finish, because we have to return html with full data
    await context.store.dispatch(searchPokemonName(keyword, true));
  } else {
    context.store.dispatch(searchPokemonName(keyword, true));
  }

  return { nothing: '' };
};

const mapStateToProps = state => ({
  isLoading: state.searchArea.isLoading,
  data: state.searchArea.data,
  error: state.searchArea.error
});

export default connect(mapStateToProps)(Search);
