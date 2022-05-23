import { ReactNode } from 'react';
import Modal from 'react-modal';

import { useRouter } from 'next/router';

Modal.setAppElement('#__next');
import { Button } from '~/components/Button';
import { CharacterDetail } from '~/modules/CharacterDetail';
import { Header } from '~/modules/Header';

import styles from './Layout.module.scss';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const pathname = router.pathname.replace('[id]', `${router.query.id}`);
  const referer = pathname === router.asPath ? '/' : pathname;
  return (
    <>
      <Header />
      <main>{children}</main>
      <Modal
        isOpen={!!router.query.id}
        onRequestClose={() => router.push(referer)}
      >
        <p onClick={() => router.push(referer)} className="closeModal">
          X
        </p>
        <div>
          <CharacterDetail id={router.query.id} />
          <div className={styles.align}>
            <Button
              onClick={() => router.push(referer)}
              className={styles.button}
            >
              OK
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Layout;
