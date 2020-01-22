// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
import Document, { Html, Head, Main, NextScript } from 'next/document';
import envConfig from '../src/config/env-config';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
          <link rel='icon' type='image/x-icon' href='/static/assets/images/favicon.ico?v=1' />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.apiUrl="${envConfig.app.apiUrl}"`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
