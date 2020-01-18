import React, { FC } from 'react';

import { Container } from './styles';

interface Props {
  uri: string;
}

const Avatar: FC<Props> = ({ uri }) => {
  return <Container source={{ uri }} />;
};

export default Avatar;
