import styled from 'styled-components';

import { primaryColor } from '~/styles/colors';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  main {
    text-align: center;
    padding: 24px;

    h1 {
      margin-bottom: 24px;
    }
  }

  footer {
    margin-top: auto;
    text-align: center;
    padding: 24px;

    a {
      color: ${primaryColor.active};
    }
  }
`;
