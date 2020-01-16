import styled from 'styled-components';

export const Container = styled.aside`
  width: 100%;
  max-width: 320px;
  padding: 30px 20px;

  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;

  h1 {
    font-size: 1.25rem;
    text-align: center;
    color: #333;
  }

  form {
    margin-top: 30px;
  }

  div {
    display: flex;

    label:first-child {
      margin-right: 20px;
    }
  }
`;
