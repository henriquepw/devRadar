import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 32px;

  display: flex;
  align-items: flex-start;

  main {
    flex: 1;
    margin-left: 32px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    aside {
      width: 100%;
    }

    main {
      margin-top: 32px;
      margin-left: 0px;
    }
  }
`;
