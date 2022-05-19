import { typeStateMenu } from '~/types';

import styles from './BtnMenu.module.scss';

type Props = {
  stateMenu: typeStateMenu;
};

export const BtnMenu = ({ stateMenu }: Props) => {
  return (
    <div className={styles.btnMenu}>
      <p
        className={styles.text}
        onClick={() => stateMenu.setToggleMenu(!stateMenu.openMenu)}
      >
        Personagens
        <img src="/images/arrow_down.svg" style={{ marginLeft: '14px' }} />
      </p>
      <div className={styles.bullet}>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};
