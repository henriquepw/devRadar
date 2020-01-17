import styled from 'styled-components';

import { opacify } from 'polished';

import { primaryColor } from '~/styles/colors';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  color: ${opacify(-0.1, primaryColor.active)};
  font-size: 0.875rem;

  input {
    width: 100%;
    height: 40px;
    color: ${primaryColor.text};
    font-size: 0.875rem;

    border: none;
    border-bottom: 1px solid ${opacify(-0.5, primaryColor.text)};
    background: transparent;

    outline: none;
  }

  &:nth-child(n + 1) {
    margin-top: 24px;
  }
`;
