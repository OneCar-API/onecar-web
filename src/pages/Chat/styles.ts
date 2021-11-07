import styled from "styled-components";
import { shade } from 'polished';

export const Container = styled.div`

  align-items: center;
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
    cursor: pointer;
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

export const Content = styled.main`
  align-self: center;
  max-width: 1000px;
  margin: 14px auto;
  height: 100%;
  min-height: 375px;
  width: 100%;
  border: 1px solid #a1a1a1;
  border-radius: 20px;
  padding: 10px;
  max-height: 400px;
  overflow-y: scroll;


  .sent-msg {
    align-self: flex-end;
    width: fit-content;
    margin-left: 0px;
    background: #5e9dbc;
    padding: 10px;
    color: white;
    border-radius: 10px;
    margin-left: auto;
    max-width: 300px;
    margin-bottom: 5px;
  }

  .recieved-msg {
    width: fit-content;
    margin-right: 0px;
    background: #e5e5e5;
    padding: 10px;
    border-radius: 10px;
    max-width: 300px;
    margin-bottom: 5px;
  }

`;

export const Input = styled.input`
    width: 100%;
    margin-right: 5px;
    border: 1px solid #a1a1a1;
    border-radius: 50px;
    padding: 5px;
`;

export const MessageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: auto;
    padding: 50px;
    bottom: 0;
    align-self: center;
    max-width: 800px;
    margin: 14px auto;
`;