import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 4rem;

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

  h1 {
    font-family: Nunito;
    font-weight: bold;
    font-size: 40px;
    display: flex;
    align-items: center;
    color: #383838;
  }

  p {
    font-size: 16px;
    display: flex;
    align-items: center;

    color: #787878;
  }

  @media (max-width: 768px) {
    align-items: center;
    .blue-text,
    .line {
      align-items: center;
    }
  }
`;
