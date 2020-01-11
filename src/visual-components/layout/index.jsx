import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import { withTranslation } from '../../helpers/i18n';
import '../shared/base.less';

class Layout extends Component {
  render() {
    const { lang } = this.props;
    return (
      <>
        <Header lang={lang} />
        <main>{this.props.children}</main>
        <Footer lang={lang} />
      </>
    );
  }
}

export default withTranslation()(Layout);
