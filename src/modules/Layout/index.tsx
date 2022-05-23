import { ReactNode } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__next');
import { Header } from '~/modules/Header';

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
