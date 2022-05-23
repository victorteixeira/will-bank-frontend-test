import { useEffect, useState } from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import { CharacterList } from '~/modules/CharacterList';
import api from '~/services/api';
import { TypeCharacter } from '~/types';

const Characters: NextPage = () => {
  const [dataCharacters, setDataCharacters] = useState<Array<TypeCharacter>>();
  const [loading, setLoading] = useState<boolean>(true);

  const [search, setSearch] = useState<string>('');
  const [dataSearchCharacters, setDataSearchCharacters] =
    useState<Array<TypeCharacter>>();

  const getCharacters = (previous: Array<TypeCharacter> = [], limit = 20) => {
    const offset = previous.length ?? 0;
    api
      .get(
        `characters?orderBy=name&limit=${limit}&offset=${offset}&apikey=adf8b90189e0183acc939584de6d82d2`
      )
      .then((response) => {
        const newData: Array<TypeCharacter> = [];
        const data = response.data.data.results;
        data.map((character: any) => {
          newData.push({
            id: character.id,
            name: character.name,
            description: character.description,
            image: `${character?.thumbnail?.path}/portrait_xlarge.${character?.thumbnail?.extension}`,
          });
        });

        setDataCharacters([...(previous || []), ...newData]);
        setLoading(false);
      });
  };

  const getCharactersSearch = (value: string) => {
    api
      .get(
        `characters?nameStartsWith=${value}&orderBy=-modified&apikey=adf8b90189e0183acc939584de6d82d2`
      )
      .then((response) => {
        const newData: Array<TypeCharacter> = [];
        const data = response.data.data.results;
        data.map((character: any) => {
          newData.push({
            id: character.id,
            name: character.name,
            description: character.description,
            image: `${character?.thumbnail?.path}/portrait_xlarge.${character?.thumbnail?.extension}`,
          });
        });

        setDataSearchCharacters(newData);
      });
  };

  /*   const handleScroll = (
    e: any,
    infiniteScroll: boolean,
    dataCharacters: Array<TypeCharacter>
  ) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );
    if (infiniteScroll && currentHeight + 1 >= scrollHeight) {
      getCharacters(dataCharacters);
    }
  }; */

  useEffect(() => {
    getCharacters([], 19);
  }, []);

  useEffect(() => {
    if (search.length) {
      getCharactersSearch(search);
    }
  }, [search]);

  return (
    <>
      <Head>
        <title>Marwill - Personagens</title>
        <meta
          name="description"
          content="Conheça os melhores personagens da marvel"
        />
      </Head>
      <div className={`loader ${(!loading && 'hide') || ''}`}></div>
      <CharacterList
        loading={loading}
        data={dataCharacters}
        getCharacters={getCharacters}
        search={{ search, setSearch }}
        dataSearch={dataSearchCharacters}
      />
    </>
  );
};
export default Characters;
