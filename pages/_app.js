import React from 'react';

import { Layout } from '../components';
import '../styles/globals.css'
import { StateContext, StateContextProvider  } from '../context/StateContext';
import { Toaster } from 'react-hot-toast';


function MyApp({ Component, pageProps }) {
  return (
    <StateContextProvider>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContextProvider>
  )
}

export default MyApp
