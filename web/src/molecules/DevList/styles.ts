import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
