import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../header';
import Footer from '../footer';
import { withTranslation } from '../../helpers/i18n';
import '../shared/base.less';

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  // clientConfigs: state.clientConfigs
});

export default connect(mapStateToProps)(withTranslation()(Layout));
