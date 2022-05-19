import { TypeCharacter } from '~/types';

type Props = TypeCharacter;

import styles from './Character.module.scss';

export const Character = ({ image, name }: Props) => {
  return (
    <div className={styles.character}>
      {image && <img src={image} />}
      {name}
    </div>
  );
};
