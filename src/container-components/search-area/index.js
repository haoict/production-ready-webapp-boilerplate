import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from '../../helpers/i18n';
import SearchArea from '../../visual-components/search-area';
import { searchChampName } from '../../store/actions/search-area';
import Router from 'next/router';

class SearchAreaContainer extends Component {
  onSuggestItemClick = itemId => {
    this.props.searchChampName('');
    Router.push(`/items?id=${itemId}`, `/items/${itemId}`).then(() => window.scrollTo(0, 0));
  };

  render() {
    const { t, searchChampName, isLoading, data, error } = this.props;
    return (
      <SearchArea
        searchChampName={searchChampName}
        isLoading={isLoading}
        data={data}
        error={error}
        onSuggestItemClick={this.onSuggestItemClick}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.searchArea.isLoading,
  data: state.searchArea.data,
  error: state.searchArea.error
});

const mapDispatchToProps = dispatch => ({
  searchChampName: name => {
    dispatch(searchChampName(name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(SearchAreaContainer));
