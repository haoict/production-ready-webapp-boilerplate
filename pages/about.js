import Head from 'next/head';

const About = props => {
  let title = 'About';
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

export default About;
