import App from 'next/app';
import { Provider } from 'react-redux';
import { i18n, appWithTranslation } from '../src/helpers/i18n';
import withRedux from 'next-redux-wrapper';
import Layout from '../src/visual-components/layout';
import { makeStore } from '../src/store';

class MyApp extends App {
  render() {
    const { Component, pageProps, lang, store } = this.props;
    return (
      <Provider store={store}>
        <Layout lang={lang}>
          <Component {...pageProps} lang={lang} />
        </Layout>
      </Provider>
    );
  }
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const lang = ctx.req ? ctx.req.language : i18n.language;

  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps, lang };
};

export default withRedux(makeStore)(appWithTranslation(MyApp));
