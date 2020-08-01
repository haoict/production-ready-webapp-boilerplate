import React from 'react';
import Link from 'next/link';

const Error = props => {
  const { statusCode } = props;
  let errMsg = `An error occurred 😵`;
  if (statusCode) {
    errMsg = `An error occurred. Error code: ${statusCode} 😵`;
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
  return { statusCode };
};

export default Error;
