import { useEffect, useState } from 'react';

import { Button } from '~/components/Button';

import styles from './Banner.module.scss';

type listBanner = {
  id: number;
  name: string;
  description: string;
  backgroundImage: string;
};

// Banners Fixo
const data = [
  {
    id: 1009610,
    name: 'Spider Man',
    description: `Picado por uma aranha radioativa, as habilidades de 
  aracnídeo de Peter Parker lhe dão poderes incríveis que 
  ele usa para ajudar os outros, enquanto sua vida pessoal 
  continua a oferecer muitos obstáculos.`,
    backgroundImage: '/images/characters/1009610/background.png',
  },
  {
    id: 1010338,
    name: 'Captain Marvel',
    description: `Carol Danvers se torna uma das heroínas mais poderosas 
  do universo quando a Terra é pega no meio de uma guerra 
  galáctica entre duas raças alienígenas.`,
    backgroundImage: '/images/characters/1010338/background.png',
  },
  {
    id: 1009407,
    name: 'LOKI',
    description: `"Glorioso". Loki, uma série original da Marvel Studios,
  disponível em #DisneyPlus`,
    backgroundImage: '/images/characters/1009407/background.png',
  },
];

export const Banner = () => {
  const [listBanner] = useState<Array<listBanner>>(data);
  const [bannerActive, setBannerActive] = useState<number>(0);
  const [backgroundImage, setBackgroundImage] = useState<string>(
    data[0]?.backgroundImage
  );

  useEffect(() => {
    if (listBanner.length) {
      const timer = setTimeout(() => {
        const sizeListBanner = listBanner.length;
        const next = bannerActive === sizeListBanner - 1 ? 0 : bannerActive + 1;
        nextBanner(next);
      }, 5000);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bannerActive, listBanner]);

  function nextBanner(pos: number) {
    if (listBanner.length && listBanner[pos]) {
      setBannerActive(pos);
      setBackgroundImage(listBanner[pos].backgroundImage);
    }
  }

  return (
    <div className={`${styles.carousel} container`}>
      <div className={styles.listBanner}>
        <div className={styles.progressIndicator}>
          <ul className={styles.list}>
            {listBanner.map(({ id, name }, i) => {
              const isActive = bannerActive === i || undefined;
              return (
                <li
                  key={id}
                  style={{
                    backgroundImage: `url(/images/characters/${id}/ico.png)`,
                  }}
                  className={`${styles.ico} ${isActive && styles.active}`}
                  onClick={() => nextBanner(i)}
                >
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={`${styles.banner}`}>
          <span
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
            className={styles.bg}
          ></span>
          <ul className={styles.list}>
            {listBanner.map(({ id, name, description }, i) => {
              const isActive = bannerActive === i || undefined;
              return (
                <li key={id} className={isActive && styles.active}>
                  <div className={styles.name}>{name}</div>
                  <div className={styles.description}>{description}</div>
                  <Button
                    href={`/?id=${id}`}
                    as={`/character/${id}`}
                    className={styles.button}
                  >
                    Conheça
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
