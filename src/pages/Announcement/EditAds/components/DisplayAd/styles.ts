import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  align-items: center;

  display: flex;
  justify-content: center;
  flex-direction: column;

  body {
    background: #ffffff;
  }

  h1 {
    margin-top: 2.5rem;
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 400;
    text-align: center;
    color: #787878;
  }

  img {
    padding: 0;
    margin-top: 41px;
    width: 14rem;
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

  button {
    margin-top: 4rem;
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
