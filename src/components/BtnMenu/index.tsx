import styles from './BtnMenu.module.scss';

export const BtnMenu = () => {
  return (
    <div className={styles.btnMenu}>
      <p className={styles.text}>
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
