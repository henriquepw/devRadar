import styled from 'styled-components';

export const Container = styled.li`
  background-color: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 24px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 54px;
      height: 54px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

      h1 {
        font-size: 1rem;
        color: #333;
      }

      span {
        font-size: 0.8125rem;
        color: #999;
        margin-top: 4px;
      }
    }
  }

  p {
    color: #666;
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin: 10px 0px;
  }

  a {
    color: #8e4dff;
    font-size: 0.875rem;
    transition: 0.3s ease;

    &:hover {
      color: #5a2ea6;
    }
  }
`;
