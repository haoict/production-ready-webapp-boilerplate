import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from '../../helpers/i18n';
import PokemonList from '../../visual-components/pokemon-list';
import { searchPokemonName } from '../../store/actions/search-area';

class PokemonListContainer extends Component {
  componentWillUnmount() {
    this.props.dispatch(searchPokemonName(''));
  }

  render() {
    const { t, isLoading, data, error } = this.props;
    return <PokemonList isLoading={isLoading} data={data} error={error} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.searchArea.isLoading,
  data: state.searchArea.data,
  error: state.searchArea.error
});

export default connect(mapStateToProps)(withTranslation()(PokemonListContainer));
