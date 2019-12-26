import Link from 'next/link';
import { withTranslation } from '../src/helpers/i18n';

const Error = props => {
  const { statusCode } = props;
  let errMsg = '';
  if (statusCode) {
    switch (statusCode) {
      case 404:
        errMsg = props.t('ErrorPageMessageServer', { statusCode: statusCode }) + '😵';
        break;
      default:
        errMsg = props.t('ErrorPageMessageServer', { statusCode: statusCode }) + '😵';
        break;
    }
  } else {
    errMsg = props.t('ErrorPageMessageClient') + '😵';
  }
  return (
    <div className='error-page-container'>
      <h3>{errMsg}</h3>
      <div className='homepage-btn'>
        <Link as='/' href='/'>
          <button>Back to homepage</button>
        </Link>
      </div>
    </div>
  );
};

Error.getInitialProps = function({ res, err }) {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  const namespacesRequired = ['common'];
  return { statusCode, namespacesRequired };
};

export default withTranslation()(Error);
