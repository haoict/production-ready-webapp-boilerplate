import { withTranslation } from '../src/helpers/i18n';
import SearchAreaContainer from '../src/container-components/search-area';

const Index = props => {
  const { t } = props;
  return (
    <>
      <div style={{ height: 150, marginBottom: 50, textAlign: 'center' }}>
        <img
          src='/static/assets/images/league-of-legends-logo.png'
          alt='logo'
          style={{ height: '100%', maxWidth: 320 }}
        />
      </div>

      <SearchAreaContainer />
    </>
  );
};

Index.getInitialProps = async function(context) {
  const namespacesRequired = ['common'];

  return { namespacesRequired };
};

export default withTranslation()(Index);
