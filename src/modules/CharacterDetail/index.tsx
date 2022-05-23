import { useEffect, useState } from 'react';

import api from '~/services/api';
import { TypeCharacter } from '~/types';

import styles from './CharacterDetail.module.scss';

type Props = {
  id: string | string[] | undefined;
};

export const CharacterDetail = ({ id }: Props) => {
  const [characterDetail, setCharacterDetail] = useState<TypeCharacter>();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      const cacheTime = 10; // 10 Minutos de cache
      const dataCache = localStorage.getItem(`${id}`);
      const dateCurrent = new Date();

      // Caso ultrapasse o numero de requisições usar outra chave
      // 45fcdce2d09e9ac083f5226f72957ef5
      // 7b006f454a4ff1cf43e0866c1ce0e4c0
      // adf8b90189e0183acc939584de6d82d2
      if (!dataCache) {
        api
          .get(`characters/${id}?apikey=adf8b90189e0183acc939584de6d82d2`)
          .then((response) => {
            const data = response?.data?.data?.results[0];
            if (data) {
              const newData = {
                id: data.id,
                name: data.name,
                description: data.description,
                image: `${data?.thumbnail?.path}/standard_xlarge.${data?.thumbnail?.extension}`,
                comics: data?.comics?.items ?? [],
                series: data?.comics?.items ?? [],
              };
              setCharacterDetail(newData);
              localStorage.setItem(
                `${id}`,
                JSON.stringify({
                  cache: dateCurrent.setMinutes(
                    dateCurrent.getMinutes() + cacheTime
                  ),
                  ...newData,
                })
              );
            }
            setLoading(false);
          });
      } else {
        const parseCache = JSON.parse(dataCache);
        setCharacterDetail(parseCache);
        setLoading(false);
        if (dateCurrent.getTime() > parseCache.cache) {
          localStorage.removeItem(`${id}`);
        }
      }
    }
  }, [id]);
  return (
    <>
      <div className={`loader ${(!loading && 'hide') || ''}`} />
      <div
        className={`${styles.characterDetail} ${
          (loading && styles.loading) || ''
        }`}
      >
        <div className={styles.detail}>
          <div className={styles.image}>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${characterDetail?.image})`,
              }}
            />
          </div>
          <div className={styles.data}>
            <div className={styles.name}>{characterDetail?.name}</div>
            <span className={styles.description}>
              {characterDetail?.description}{' '}
            </span>
          </div>
        </div>
        <p className={styles.bar}></p>
        <div className={styles.list}>
          <div className={styles.comics}>
            <p className={styles.title}>Comics</p>
            <ul>
              {characterDetail?.comics?.map(({ name }, i) => {
                return <li key={i}>{name}</li>;
              })}
            </ul>
          </div>
          <div className={styles.series}>
            <p className={styles.title}>Series</p>
            <ul>
              {characterDetail?.series?.map(({ name }, i) => {
                return <li key={i}>{name}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
