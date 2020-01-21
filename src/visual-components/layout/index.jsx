import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';

import '../shared/base.less';

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
