import type { AppProps } from 'next/app';

import '~/styles/globals.scss';
import Head from 'next/head';

import Layout from '~/components/Layout';

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
