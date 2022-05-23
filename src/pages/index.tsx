import type { NextPage } from 'next';
import Head from 'next/head';

import { Banner } from '~/modules/Banner';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Descrição para Seo..." />
      </Head>
      <Banner />
    </>
  );
};
export default Home;
