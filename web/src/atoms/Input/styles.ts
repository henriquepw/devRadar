import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  color: #acacac;
  font-size: 0.875rem;

  input {
    width: 100%;
    height: 32px;
    color: #666;
    font-size: 0.875rem;

    border: none;
    border-bottom: 1px solid #eee;
    background: transparent;

    outline: none;
  }

  &:nth-child(n + 1) {
    margin-top: 20px;
  }
`;
