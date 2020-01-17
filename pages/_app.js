import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import Layout from '../src/visual-components/layout';
import { makeStore } from '../src/store';

class MyApp extends App {
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

export default withRedux(makeStore)(MyApp);
