import React, { useContext, useEffect, useState } from 'react';

import api from '~/services/api';

import Button from '~/atoms/Button';
import Input from '~/atoms/Input';

import DevContext from '~/context/DevContext';

import { Container } from './styles';

function Sidebar() {
  const { addDev } = useContext(DevContext);

  const [githubUsername, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    function getPosition({ coords }: Position): void {
      setLatitude(coords.latitude);
      setLongitude(coords.longitude);
    }

    function handlerError(err: PositionError): void {
      const { log } = console;
      log(err);
    }

    navigator.geolocation.getCurrentPosition(getPosition, handlerError, {
      timeout: 30000,
    });
  }, []);

  async function handlerAddDev(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();

    const response = await api.post('/devs', {
      techs,
      latitude,
      longitude,
      github_username: githubUsername,
    });

    setGithubUsername('');
    setTechs('');

    addDev!(response.data);
  }

  return (
    <Container>
      <h1>Register</h1>
      <form onSubmit={handlerAddDev}>
        <Input
          name="github_username"
          value={githubUsername}
          onChange={e => setGithubUsername(e.target.value)}
        >
          Github Username
        </Input>
        <Input
          name="techs"
          value={techs}
          onChange={e => setTechs(e.target.value)}
        >
          Technologies
        </Input>
        <div>
          <Input
            type="number"
            name="latitude"
            value={latitude}
            onChange={e => setLatitude(Number(e.target.value))}
          >
            Latitude
          </Input>
          <Input
            type="number"
            name="longitude"
            value={longitude}
            onChange={e => setLatitude(Number(e.target.value))}
          >
            Longitude
          </Input>
        </div>
        <Button type="submit">Save</Button>
      </form>
    </Container>
  );
}

export default Sidebar;
