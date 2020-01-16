import React from 'react';

import Button from '~/atoms/Button';
import Input from '~/atoms/Input';

import { Container } from './styles';

function Sidebar() {
  return (
    <Container>
      <h1>Register</h1>
      <form>
        <Input name="github_username">Github Username</Input>
        <Input name="techs">Technologies</Input>
        <div>
          <Input name="latitude">Latitude</Input>
          <Input name="longitude">Longitude</Input>
        </div>
        <Button>Save</Button>
      </form>
    </Container>
  );
}

export default Sidebar;
