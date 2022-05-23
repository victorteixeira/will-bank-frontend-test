import Image from 'next/image';

import { TypeCharacter } from '~/types';

type Props = TypeCharacter;

import styles from './Character.module.scss';

export const Character = ({ image, name }: Props) => {
  return (
    <div className={styles.character}>
      {image && <Image src={image} alt="Spider Man" width={202} height={277} />}
      <span className={styles.name}>{name}</span>
    </div>
  );
};
