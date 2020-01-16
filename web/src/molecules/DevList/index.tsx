import React, { useEffect, useState } from 'react';

import api from '~/services/api';

import DevItem from '~/molecules/DevItem';

import { Container } from './styles';

interface Dev {
  _id: number;
  bio: string;
  name: string;
  techs: string[];
  avatar_url: string;
  github_username: string;
}

function DevList() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs(): Promise<void> {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

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
