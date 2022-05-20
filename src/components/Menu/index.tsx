import { useState } from 'react';

import { TypeCharacter } from '~/types';

import { Character } from '../Character';
import styles from './Menu.module.scss';

export const Menu = () => {
  const [activeMenu, setToggleActiveMenu] = useState<boolean>(false);

  const handlerBtnMenu = () => {
    setToggleActiveMenu(!activeMenu);
  };

  const characters: Array<TypeCharacter> = [
    { id: 1, image: '/images/teste.png', name: 'Spider Man' },
    { id: 2, image: '/images/teste.png', name: 'Spider Man' },
    { id: 3, image: '/images/teste.png', name: 'Spider Man' },
    { id: 4, image: '/images/teste.png', name: 'Spider Man' },
    { id: 5, image: '/images/teste.png', name: 'Spider Man' },
  ];

  return (
    <>
      <div className={styles.btnMenu} onClick={handlerBtnMenu}>
        <p className={styles.text}>
          Personagens
          <span
            className={styles.arrow}
            style={{
              marginLeft: '14px',
              backgroundImage: `url(/images/arrow_${
                activeMenu ? 'up' : 'down'
              }.svg)`,
            }}
          />
        </p>
        <div className={styles.bullet}>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
      <div className={`${styles.menu} ${activeMenu && styles.open}`}>
        <ul className={styles.listcharacters}>
          {characters.map(({ id, image, name }) => {
            return (
              <li key={id}>
                <Character id={id} image={image} name={name} />
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
