import React, { FC } from 'react';

import { Container } from './styles';

interface Props {
  onPress(): void;
}

const LoadButton: FC<Props> = ({ children, onPress }) => {
  return <Container onPress={onPress}>{children}</Container>;
};

export default LoadButton;
