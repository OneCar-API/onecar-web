import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;

  margin-top: 200px;

  .user-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      margin-bottom: 32px;
    }

    h1 {
      font-weight: bold;
      font-size: 25px;
      color: #5e9dbc;
      margin-bottom: 16px;
      text-align: center;
    }

    p {
      font-size: 20px;
      color: #787878;
      margin-bottom: 64px;
    }
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
`;
