import { useState } from 'react';

import Link from 'next/link';

import { TypeCharacter } from '~/types';

import { Character } from '../../components/Character';
import styles from './CharacterList.module.scss';

type Props = {
  data?: Array<TypeCharacter>;
  loading?: boolean;
  getCharacters?: any;
  search?: any;
  dataSearch?: Array<TypeCharacter>;
};

export const CharacterList = ({
  data,
  loading,
  getCharacters,
  search,
  dataSearch,
}: Props) => {
  return (
    <div className={`${styles.characterList} container`}>
      <div className={styles.header}>
        <div className={styles.title}>Personagens exclusivos</div>
        <div className={styles.search}>
          <input
            type="text"
            name="name"
            className={styles.input}
            placeholder="Digite sua busca"
            onChange={(e) => search.setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className={`${styles.list} ${(loading && styles.loading) || ''}`}>
        <ul
          style={{
            display: `${dataSearch?.length ? 'none' : 'flex'}`,
          }}
        >
          {data?.map(({ id, name, image }) => {
            return (
              <li key={id}>
                <Link href={`/characters?id=${id}`} as={`/character/${id}`}>
                  <a>
                    <Character id={id} image={image} name={name} />
                  </a>
                </Link>
              </li>
            );
          })}
          <li
            onClick={() => {
              getCharacters(data);
            }}
            className={styles.seeAll}
          >
            : : Ver Mais
          </li>
        </ul>
        <ul
          style={{
            display: `${!dataSearch?.length ? 'none' : 'flex'}`,
          }}
        >
          {dataSearch?.map(({ id, name, image }) => {
            return (
              <li key={id}>
                <Link href={`/characters?id=${id}`} as={`/character/${id}`}>
                  <a>
                    <Character id={id} image={image} name={name} />
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
