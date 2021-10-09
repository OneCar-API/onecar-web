import styled from 'styled-components';
import { shade } from 'polished';

import backgroundImg from '../../../assets/images/backgroundImg.svg';

export const Container = styled.div`
  background: url(${backgroundImg}) no-repeat;
  background-size: cover;
  height: 100vh;

  display: flex;
  flex-direction: column;
  place-content: center;
`;

export const Header = styled.div`
  height: 25vh;
  background: rgb(242, 242, 242, 0.9);
  background-size: cover;

  button {
    margin-top: 16px;
    margin-left: 16px;
  }
`;

export const Content = styled.div`
  background: rgb(242, 242, 242, 0.9);
  background-size: cover;

  display: flex;
  flex-direction: column;

  align-items: center;
  /* margin-top: 146px; */

  width: 100vw;
  height: 100vh;

  form {
    align-items: center;
    margin: 30px 0;
    width: 500px;
    text-align: center;
  }

  h1 {
    color: #787878;
    font-size: 64px;
  }

  a {
    color: #5e9dbc;
    display: block;
    margin-top: 16px;
    text-decoration: none;
    transition: color 0.2s;
    align-items: center;
    font-size: 24px;

    &:hover {
      color: ${shade(0.2, '#5E9DBC')};
    }
  }

  button {
    margin-top: 80px;
  }
`;

export const Background = styled.div`
  flex: 1;
`;
