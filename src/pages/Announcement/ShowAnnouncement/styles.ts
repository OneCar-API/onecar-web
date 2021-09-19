import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  body {
    background: #ffffff;
  }
`;

export const Header = styled.header`
  padding: 15px;
  background: #e5e5e5;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  a {
    width: 60px;
    color: #787878;
    text-decoration: none;
  }

  button {
    margin-left: 90px;
    background: #5e9dbc;
    color: #fff;
    font-size: 16px;
    border: 0;
    border-radius: 25px;
    transition: background-color 0.2s;
    width: 100px;
    height: 30px;

    &:hover {
      background: ${shade(0.2, '#5E9DBC')};
    }
  }
`;

export const Form = styled.form`
  width: 600px;
  display: flex;
  margin-left: 175px;

  input {
    flex: 1;
    height: 30px;
    padding: 0 24px;
    border: 0;
    border-radius: 25px 0 0 25px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    margin-left: auto;
    background: #fff;
    border: 0;
    border-radius: 0 25px 25px 0;
    transition: background-color 0.2s;
    width: 50px;
    height: 30px;

    &:hover {
      background: ${shade(0.2, '#ffffff')};
    }

    svg {
      color: var(--blue);
      width: 16px;
      height: 16px;
      margin-top: 5px;
    }
  }
`;

export const Profile = styled.div`
  align-items: center;

  img {
    margin-left: 150px;
    width: 35px;
    height: 35px;
  }
`;

export const Content = styled.main`
  max-width: 1200px;
  margin: 64px auto;
  display: flex;
`;

export const Main = styled.div`
  flex: 1;
  margin-right: 70px;

  > img {
    width: 680px;
    height: 410px;
    border-radius: 12px;
    box-shadow: 2.5px 3px 5px 1px #c4c4c4;
  }

  div {
    display: flex;
    margin-top: 10px;

    button {
      border: 0;
      background: transparent;
      border-radius: 12px;

      & + button {
        margin-left: 10px;
      }

      img {
        width: 95px;
        height: 95px;
        border-radius: 12px;
        box-shadow: 2.5px 3px 5px 1px #c4c4c4;
      }
    }
  }

  h1 {
    color: #787878;
    margin-top: 32px;
  }

  input {
    height: 150px;
    width: 100%;
    padding: 0 24px;
    border-color: #c4c4c4;
    border-radius: 12px;
    color: #3a3a3a;
    font-size: 18px;

    &::placeholder {
      color: #a8a8b3;
    }
  }
`;

export const Info = styled.aside`
  width: 500px;

  > strong {
    font-size: 40px;
    color: #383838;
  }

  h1 {
    background: var(--blue);
    padding: 8px;
    width: 320px;
    color: #fff;
    border-radius: 30px 12px 12px 30px;
    text-align: center;
    font-size: 35px;
    margin-top: 20px;
  }

  > div {
    display: flex;
    margin-top: 40px;
    align-items: center;

    img {
      height: 30px;
      width: 30px;
    }

    div {
      margin-left: 20px;

      p {
        font-size: 16px;
        color: #787878;
      }

      strong {
        font-size: 20px;
        color: #383838;
        font-weight: 400;
      }
    }
  }
`;
