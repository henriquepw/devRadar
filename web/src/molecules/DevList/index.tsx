import React, { useContext, useEffect } from 'react';

import api from '~/services/api';

import DevItem from '~/molecules/DevItem';

import DevContext, { Dev } from '~/context/DevContext';

import { Container } from './styles';

function DevList() {
  const { devs, setDevs } = useContext(DevContext);

  useEffect(() => {
    async function loadDevs(): Promise<void> {
      const response = await api.get('/devs');

      setDevs!(response.data);
    }

    loadDevs();
  }, [setDevs]);

  return (
    <Container>
      {devs.map((dev: Dev) => (
        <DevItem
          key={dev._id}
          name={dev.name}
          techs={dev.techs.join(', ')}
          description={dev.bio}
          avatarURL={dev.avatar_url}
          githubURL={`https://github.com/${dev.github_username}`}
        />
      ))}
    </Container>
  );
}

export default DevList;
