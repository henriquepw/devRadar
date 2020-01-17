import styled from 'styled-components';

import { darken } from 'polished';

import { primaryColor, secundaryColor } from '~/styles/colors';

export const Container = styled.li`
  background-color: ${secundaryColor.bg};
  box-shadow: 0 0 10px 0 ${primaryColor.shadow};
  border-radius: 2px;
  padding: 24px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 54px;
      height: 54px;
      border-radius: 50%;
      margin: 8px;

      box-shadow: 0 0 0 6px ${primaryColor.bg}, 0 0 0 8px ${secundaryColor.text};
    }

    div {
      margin-left: 16px;

      h1 {
        font-size: 1rem;
        color: ${primaryColor.text};
      }

      span {
        display: block;
        font-size: 0.8125rem;
        color: ${secundaryColor.text};
        margin-top: 4px;
      }
    }
  }

  p {
    color: ${primaryColor.text};
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin: 16px 0px;
  }

  a {
    color: ${primaryColor.active};
    font-size: 0.875rem;
    transition: color 0.2s;

    &:hover {
      color: ${darken(0.2, primaryColor.active)};
    }
  }
`;
