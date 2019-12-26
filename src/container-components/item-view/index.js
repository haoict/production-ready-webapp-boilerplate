import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from '../../helpers/i18n';
import ItemView from '../../visual-components/item-view'

class ItemViewContainer extends Component {
  render() {
    const { t, isLoading, data, error } = this.props;
    return <ItemView isLoading={isLoading} data={data} error={error} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.item.isLoading,
  data: state.item.data,
  error: state.item.error
});

export default connect(mapStateToProps)(withTranslation()(ItemViewContainer));
