import styles from './Menu.module.scss';

export const Menu = () => {
  const characters = [
    { id: 1, image: '/images/teste.png', text: 'Spider Man' },
    { id: 3, image: '/images/teste.png', text: 'Spider Man' },
    { id: 3, image: '/images/teste.png', text: 'Spider Man' },
    { id: 4, image: '/images/teste.png', text: 'Spider Man' },
    { id: 5, image: '/images/teste.png', text: 'Spider Man' },
  ];
  return (
    <>
      <div className={`${styles.menu} ${styles.open}`}>
        <ul className={styles.listcharacters}>
          {characters.map(({ id, image, text }) => {
            return (
              <li key={id}>
                {text} - {image}
              </li>
            );
          })}
        </ul>
        <div className={styles.seeAll}>
          <span className={styles.dots}>: :</span> Ver Todos
        </div>
      </div>
    </>
  );
};
