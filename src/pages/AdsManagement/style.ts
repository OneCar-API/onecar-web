import styled from "styled-components";
import { shade } from 'polished';
import { FiTrash2 } from 'react-icons/fi'

export const Container = styled.div`
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
  > img {
    height: 35px;
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
  margin-left: 100px;
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
    margin-left: 20px;
    width: 35px;
    height: 35px;
  }
  cursor: pointer;
`;

export const Menu = styled.div`
    display: flex;
    
    h1{
        color: var(--text);
        font-size: 48px;
        margin: 1rem 2rem;
    }
    
    
    button {
        float: right;
        position: absolute;
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

    flex-wrap: wrap;
    display: flex;
    #content{
        background-color: #E5E5E5;
        margin: 2rem;
        width: 50rem;
        height: 15rem;
        display: flex;
        border-radius: 12px;
        box-shadow: 2.5px 3px 5px 1px #c4c4c4;
        
    }
    
    h2{
        padding-left: 5rem;
        margin: 1rem;
        font-size: 35px;
        color: var(--text);
        padding-bottom:0;
    }
    p{
        text-align: right;
        padding: 0.5rem;
        color: var(--text-information)
    }
    p.date{
        margin-top: 1rem;
        margin-left: 2rem;
        text-align: left;
    }
    img.icons{
        height: 20px;
        width: 20px;
    }
    #description{
        div {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        padding-left: 14rem;
         img {
          width: 27px;
          height: 24px;
          color: #787878;
          margin-right: 15px;
        }
        p {
          font-size: 14px;
          color: #808080;
        }
        
        
      }
    }
    
`;

export const DeleteIcon = styled(FiTrash2)`
    font-size: 25px;
    cursor: pointer;
    color: #808080;
    border-radius: 5px;
    padding: 3px;

    &:hover {
      background: red;
      color: white;
    }
`;