import React from 'react';

import { Container } from './styles';

interface Props {
  name: string;
  children: string;
  value?: string | number;
  type?: string;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}

function Input({ children, name, value, type, onChange }: Props) {
  return (
    <Container htmlFor={name}>
      {children}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required
      />
    </Container>
  );
}

export default Input;
