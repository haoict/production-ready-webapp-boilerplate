import React from 'react';
import Link from 'next/link';
import { wrapper } from '../src/store';

const Error = (props) => {
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

export const getServerSideProps = wrapper.getServerSideProps(async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { props: { statusCode } };
});

export default Error;
