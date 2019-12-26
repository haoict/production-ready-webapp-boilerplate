import App from 'next/app';
import { Provider } from 'react-redux';
import { appWithTranslation } from '../src/helpers/i18n';
import withRedux from 'next-redux-wrapper';
import Layout from '../src/visual-components/layout';
import { makeStore } from '../src/store';

class EpubvnApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(appWithTranslation(EpubvnApp));
