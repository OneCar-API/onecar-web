import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 400;
    color: #787878;
    margin-bottom: 4rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.6rem;
    }

    label {
      margin-left: 1rem;
      font-weight: 600;
      font-size: 18px;
      color: #383838;
    }

    .buttons {
      margin-top: 4rem;

      display: flex;
      width: auto;
      font-size: 16px;
      font-weight: 700;
      gap: 2rem;
    }
  }
`;
