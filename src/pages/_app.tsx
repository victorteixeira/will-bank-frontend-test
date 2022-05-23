import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '~/modules/Layout';

import '~/styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
