import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.div`
  display: flex;
  max-width: 1440px;
  width: 100%;
  align-items: center;
  justify-content: flex-start;

  button {
    float: right;
    right: 0;
    margin: 2rem;
    border-radius: 12px;
    height: 42px;
    width: 160px;
    font-size: 24px;
    font-weight: normal;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 2rem;
  max-width: 1440px;
  width: 100%;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }

  .ads {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 2rem;
    flex-wrap: wrap;

    a:-webkit-any-link {
      color: transparent;
    }
  }

  @media (max-width: 768px) {
    .ads {
      justify-content: center;
    }
    align-items: center;
    .blue-text,
    .line {
      align-items: center;
    }
  }

  .blue-text {
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #5e9dbc;

    .line {
      width: 32px;
      border: 1px solid #5e9dbc;
      background-color: #5e9dbc;
      border-radius: 8px;
    }

    p {
      margin: 0 1rem 0 1rem;
      font-family: Nunito;
      font-size: 16px;
      display: flex;
      align-items: center;

      color: #5e9dbc;
    }
  }
`;
