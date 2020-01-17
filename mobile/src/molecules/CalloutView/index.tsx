import React, { FC } from 'react';
import { Callout } from 'react-native-maps';

import { Container, DevName, DevBio, DevTechs } from './styles';

interface Dev {
  name: string;
  bio: string;
  techs: string[];
}

interface Props {
  dev: Dev;
  onPress(): void;
}

const CalloutView: FC<Props> = ({ dev, onPress }) => {
  return (
    <Callout onPress={onPress}>
      <Container>
        <DevName>{dev.name}</DevName>
        <DevBio>{dev.bio}</DevBio>
        <DevTechs>{dev.techs.join(', ')}</DevTechs>
      </Container>
    </Callout>
  );
};

export default CalloutView;
