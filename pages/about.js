import Head from 'next/head';
import { withTranslation } from '../src/helpers/i18n';

const About = props => {
  let title = props.t('About');
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h3>About</h3>
      <p>Production Ready Web App Boilerplate</p>
      <h3>Copyright Notice</h3>
      <p>
        Please note all Pokémon data and the logo are copyrighted by the Pokémon Company and its affiliates. This
        repository is merely a compilation of data collected by automated tool.
      </p>
    </>
  );
};

About.getInitialProps = async function(context) {
  const namespacesRequired = ['common'];
  return { namespacesRequired };
};

export default withTranslation()(About);
