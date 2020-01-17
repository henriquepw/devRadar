import React from 'react';

import { Container } from './styles';

interface Props {
  uri: string;
}

function Avatar({ uri }: Props) {
  return <Container source={{ uri }} />;
}

export default Avatar;
