import styled from 'styled-components';

export const Container = styled.div`
  height: 300px;
  background: #e1faec;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  outline: 0;

  p {
    height: 280px;
    border-radius: 10px;
    border: 1px dashed #5e9dbc;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #787878;
  }

  h1 {
    height: 280px;
    border-radius: 10px;
    border: 1px dashed #5e9dbc;
    font-size: 46px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #787878;
  }

  svg {
    color: #5e9dbc;
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }
`;
