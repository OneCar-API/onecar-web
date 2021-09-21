import styled from 'styled-components';
import { shade } from 'polished';

import backgroundImg from '../../assets/images/backgroundImg.svg';

export const Container = styled.div`
  background: url(${backgroundImg}) no-repeat;
  background-size: cover;

  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  background: rgb(242, 242, 242, 0.9);
  background-size: cover;

  display: flex;
  flex-direction: column;

  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    a {
      color: #5e9dbc;
      display: block;
      margin-top: 5px;
      text-decoration: none;
      transition: color 0.2s;
      margin-right: 175px;

      &:hover {
        color: ${shade(0.2, '#5E9DBC')};
      }
    }
    > button {
      width: 177px;
      height: 73px;
    }
  }
  > a {
    color: #5e9dbc;
    display: block;
    margin-top: 16px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#5E9DBC')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  /* background: url(${backgroundImg}) no-repeat;
  background-size: cover; */
`;
