import React from 'react';

import { Container } from './styles';

interface Props {
  name: string;
  children: string;
}

function Input({ name, children }: Props) {
  return (
    <Container htmlFor={name}>
      {children}
      <input name={name} id={name} required />
    </Container>
  );
}

export default Input;
