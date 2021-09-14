import styled from "styled-components";
import { shade } from 'polished';

import backgroundImg from '../../assets/images/backgroundImg.svg'

export const Container = styled.div`
  background: url(${backgroundImg}) no-repeat;
  /* background-size: cover; */


  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  background: #F2F2F2;
  
  display: flex;
  flex-direction: column;
  
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  

  form{
    margin: 80px 0;
    width: 340px;
    text-align: center;
   
    a{
      color: #5E9DBC;
      display: block;
      margin-top: 16px;
      text-decoration: none;
      transition:color 0.2s;

      &:hover{
        color: ${shade(0.2, '#5E9DBC')}
      }
   }
  }
   > a {
      color: #5E9DBC;
      display: block;
      margin-top: 16px;
      text-decoration: none;
      transition:color 0.2s;

      display: flex;
      align-items: center;


      svg{
        margin-right: 16px;
      }

      &:hover{
        color: ${shade(0.2, '#5E9DBC')}
      }   
  }
`;

export const Background = styled.div`
  flex: 1;
  /* background: url(${backgroundImg}) no-repeat;
  background-size: cover; */

`;