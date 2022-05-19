import { ReactNode, useState } from 'react';

import { Header } from '~/components/Header';
import { typeStateMenu } from '~/types';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const [openMenu, setToggleMenu] = useState<boolean>(false);
  const stateMenu: typeStateMenu = {
    openMenu: openMenu,
    setToggleMenu: setToggleMenu,
  };

  return (
    <>
      <Header stateMenu={stateMenu} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
