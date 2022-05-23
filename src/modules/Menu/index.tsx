import { useState } from 'react';

import Link from 'next/link';

import { TypeCharacter } from '~/types';

import { Character } from '../../components/Character';
import styles from './Menu.module.scss';

export const Menu = () => {
  const [activeMenu, setToggleActiveMenu] = useState<boolean>(false);

  const handlerBtnMenu = () => {
    setToggleActiveMenu(!activeMenu);
  };

  const characters: Array<TypeCharacter> = [
    {
      id: 1009610,
      image: '/images/characters/1009610/bg_menu.png',
      name: 'Spider Man',
    },
    {
      id: 1009351,
      image: '/images/characters/1009351/bg_menu.png',
      name: 'Hulk',
    },
    {
      id: 1009407,
      image: '/images/characters/1009407/bg_menu.png',
      name: 'Loki',
    },
    {
      id: 1011498,
      image: '/images/characters/1011498/bg_menu.png',
      name: 'Black Window',
    },
    {
      id: 1009282,
      image: '/images/characters/1009282/bg_menu.png',
      name: 'Doctor Strange',
    },
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
                <Link href={`/?id=${id}`} as={`/character/${id}`}>
                  <a>
                    <Character id={id} image={image} name={name} />
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.seeAll}>
          <Link href={`/characters`} passHref>
            <a onClick={handlerBtnMenu}>
              <span className={styles.dots}>: :</span> Ver Todos
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};
