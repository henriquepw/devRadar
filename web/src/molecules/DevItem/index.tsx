import React from 'react';

import { Container } from './styles';

interface Props {
  name: string;
  techs: string;
  description: string;
  avatarURL: string;
  githubURL: string;
}

function ListItem({ name, techs, description, githubURL, avatarURL }: Props) {
  return (
    <Container>
      <header>
        <img src={avatarURL} alt={name} />
        <div>
          <h1>{name}</h1>
          <span>{techs}</span>
        </div>
      </header>
      <p>{description}</p>
      <a href={githubURL}>Github profile</a>
    </Container>
  );
}

export default ListItem;
