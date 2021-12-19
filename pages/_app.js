import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/index.css';

import { register } from 'codelift';
import Layout from 'components/Layout';

register({ React, ReactDOM });

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
