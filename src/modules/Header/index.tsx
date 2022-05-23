import Image from 'next/image';
import Link from 'next/link';

import { Menu } from '../Menu';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container + ` container`}>
          <Link href="/" passHref>
            <a className={styles.logo}>
              <div className={styles.logotipo}>
                <Image
                  src={`/images/marwill.svg`}
                  alt="Marwill"
                  width={114}
                  height={25}
                />
              </div>
              <div className={styles.bullet}></div>
            </a>
          </Link>
          <Menu />
        </div>

        <div className={styles.bar}>
          <p className={styles.line} />
          <div className="container" style={{ height: '100%' }}>
            <p className={styles.lineBar} />
          </div>
        </div>
      </header>
    </>
  );
};
