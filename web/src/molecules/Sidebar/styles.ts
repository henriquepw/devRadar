import styled from 'styled-components';

import { primaryColor, secundaryColor } from '~/styles/colors';

export const Container = styled.aside`
  width: 100%;
  max-width: 320px;
  padding: 32px 24px;

  background-color: ${secundaryColor.bg};
  box-shadow: 0 0 10px 0 ${primaryColor.shadow};
  border-radius: 2px;

  h1 {
    font-size: 1.25rem;
    text-align: center;
    color: ${primaryColor.text};
  }

  form {
    margin-top: 32px;
  }

  div {
    display: flex;

    label {
      flex: 1;
    }

    label:first-child {
      margin-right: 24px;
    }
  }

  @media (max-width: 1000px) {
    max-width: 100%;
  }
`;
