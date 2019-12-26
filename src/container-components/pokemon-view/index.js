import React, { Component } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { withTranslation } from '../../helpers/i18n';
import PokemonView from '../../visual-components/pokemon-view';

class PokemonViewContainer extends Component {
  render() {
    const { t, isLoading, data, error } = this.props;
    return (
      <>
        <Head>{data && <title>{data.name.english}</title>}</Head>
        <PokemonView isLoading={isLoading} data={data} error={error} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.pokemon.isLoading,
  data: state.pokemon.data,
  error: state.pokemon.error
});

export default connect(mapStateToProps)(withTranslation()(PokemonViewContainer));
