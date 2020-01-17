import styled from 'styled-components';

import { primaryColor, secundaryColor } from '~/styles/colors';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  color: ${primaryColor.active};
  font-size: 0.875rem;

  input {
    width: 100%;
    height: 40px;
    color: ${primaryColor.text};
    font-size: 0.875rem;

    border: none;
    border-bottom: 1px solid ${secundaryColor.text};
    background: transparent;

    outline: none;
  }

  &:nth-child(n + 1) {
    margin-top: 24px;
  }
`;
