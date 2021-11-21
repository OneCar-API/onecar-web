import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 860px;

  border-left: 3px solid #e5e5e5;
  margin-left: 2rem;
  padding-left: 2rem;

  .title {
    display: flex;

    h1 {
      font-family: Nunito;
      font-weight: bold;
      font-size: 3rem;
      color: #5e9dbc;
      margin-right: 1rem;
    }
  }

  .main-details {
    h3 {
      font-family: Nunito;
      font-weight: bold;
      font-size: 2rem;
      color: #383838;
      margin-bottom: 1rem;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      margin-bottom: 1rem;

      img {
        width: 22px;
        margin-right: 1rem;
      }
    }
  }

  .description {
    margin-top: 4rem;
    margin-bottom: 2rem;

    h3 {
      font-family: Nunito;
      font-weight: bold;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #383838;
    }

    p {
      font-family: Nunito;
      font-size: 1.5rem;
      color: #383838;
    }
  }

  .btn {
    margin-bottom: 2rem;
  }

  @media (max-width: 840px) {
    width: 100%;
  }
`;
