import styled from 'styled-components';

import { motion } from 'framer-motion';
import { opacify } from 'polished';

import { primaryColor } from '~/styles/colors';

export const Container = styled(motion.button)`
  cursor: pointer;
  width: 100%;

  margin-top: 32px;
  padding: 16px 24px;

  border: none;
  border-radius: 2px;
  background-color: ${opacify(-0.15, primaryColor.active)};

  font-size: 1rem;
  font-weight: bold;
  color: ${primaryColor.text};

  user-select: none;

  &:active {
    outline: none;
  }
`;
