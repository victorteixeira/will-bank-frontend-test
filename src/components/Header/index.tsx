import { BtnMenu } from '~/components/BtnMenu';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container + ` container`}>
          <div className={styles.logo}>
            <img src="/images/marwill.png" style={{ marginRight: '5px' }} />
            <img src="/images/bullet.png" />
          </div>
          <BtnMenu />
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
