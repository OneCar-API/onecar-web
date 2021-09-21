import styled from 'styled-components';

import backgroundImg from '../../assets/images/backgroundImg.svg';

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
    margin: 80px 0;
    width: 340px;
    text-align: center;
  }
`;

export const Background = styled.div`
  flex: 1;
  /* background: url(${backgroundImg}) no-repeat;
  background-size: cover; */
`;
