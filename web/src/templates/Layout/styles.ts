import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;

  display: flex;
  align-items: flex-start;

  main {
    flex: 1;
    margin-left: 30px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    aside {
      width: 100%;
    }

    main {
      margin-top: 30px;
      margin-left: 0px;
    }
  }
`;
