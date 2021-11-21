import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  padding: 0 4rem;

  .delete {
    margin-top: 6rem;
  }

  .delete-ask {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      margin-bottom: 1rem;
      font-weight: bold;
      font-size: 16px;
      display: flex;
      color: #bc5e5e;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      #set-delete {
        border-color: #bc5e5e;
        color: #bc5e5e;
      }
    }
  }

  body {
    background: #ffffff;
  }

  h1 {
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 400;
    text-align: center;
    color: #787878;
  }

  img {
    padding: 0;
    margin-top: 4rem;
    width: 224px;
    border-radius: 1rem;
  }

  #title {
    color: #5e9dbc;
    font-weight: 700;
    line-height: 34px;
  }

  h2 {
    color: #787878;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    text-align: center;
  }

  h3 {
    font-size: 1rem;
    font-weight: bold;
    margin-top: 4rem;
  }

  p {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 400;
  }

  > div {
    width: 21rem;
    text-align: center;
  }
`;
