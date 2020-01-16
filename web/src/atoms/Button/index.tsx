import React from 'react';

import { Container } from './styles';

interface Props {
  children: string;
  type?: 'button' | 'submit' | 'reset';
}

function Button({ children, type }: Props) {
  return <Container type={type}>{children}</Container>;
}

Button.defaultProps = {
  type: 'button',
};

export default Button;
