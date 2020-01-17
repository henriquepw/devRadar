import styled from 'styled-components';

import { opacify, darken } from 'polished';

import { primaryColor } from '~/styles/colors';

export const Container = styled.button`
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

  transition: 0.4s ease;

  &:hover {
    background-color: ${darken(0.1, primaryColor.active)};
  }
`;
