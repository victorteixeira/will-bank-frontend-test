import { ReactNode, useState } from 'react';

import { Header } from '~/components/Header';
import { typeStateMenu } from '~/types';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
