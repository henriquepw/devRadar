import React from 'react';

import { darken, opacify } from 'polished';

import { Container } from './styles';
import { primaryColor } from '~/styles/colors';

interface Props {
  children: string;
  type?: 'button' | 'submit' | 'reset';
}

const variants = {
  normal: {
    scale: 1,
    background: opacify(-0.1, primaryColor.active),
  },
  hover: {
    scale: 1.03,
    background: darken(0.1, primaryColor.active),
  },
  tap: {
    scale: 0.98,
    background: darken(0.1, primaryColor.active),
  },
};

function Button({ children, type }: Props) {
  return (
    <Container
      variants={variants}
      initial="normal"
      whileHover="hover"
      whileTap="tap"
      type={type}
    >
      {children}
    </Container>
  );
}

Button.defaultProps = {
  type: 'button',
};

export default Button;
