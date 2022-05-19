import { TypeCharacter, typeStateMenu } from '~/types';

import { Character } from '../Character';
import styles from './Menu.module.scss';

type Props = {
  stateMenu: typeStateMenu;
};

export const Menu = ({ stateMenu }: Props) => {
  const characters: Array<TypeCharacter> = [
    { id: 1, image: '/images/teste.png', name: 'Spider Man' },
    { id: 3, image: '/images/teste.png', name: 'Spider Man' },
    { id: 3, image: '/images/teste.png', name: 'Spider Man' },
    { id: 4, image: '/images/teste.png', name: 'Spider Man' },
    { id: 5, image: '/images/teste.png', name: 'Spider Man' },
  ];

  return (
    <>
      <div
        className={`${styles.menu} ${
          !stateMenu.openMenu ? '' : `${styles.open}`
        }`}
      >
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
