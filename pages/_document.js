// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
import Document, { Html, Head, Main, NextScript } from 'next/document';
import envConfig from '../src/config/env-config';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Montserrat' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Raleway' />
          <link href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
          <link rel='icon' type='image/x-icon' href='/static/assets/images/favicon.ico?v=1' />
          <link
            rel='stylesheet'
            type='text/css'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css'
          />
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
