import styled from 'styled-components';

export const Container = styled.div`
  width: 240px;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 1rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
  padding: 0.5rem;

  :hover {
    cursor: pointer;
    transition: all 0.3s;
    transform: scale(1.04);
  }

  img {
    width: 100%;
    height: 148px;
    border-radius: 0.8rem;
    object-fit: cover;
  }

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
    color: #383838;
  }

  .year {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 49px;
    height: 20px;
    border: 1px solid #787878;
    box-sizing: border-box;
    border-radius: 8px;

    p {
      margin: 0;
      width: 22px;
      height: 10px;
      font-family: Nunito;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      color: #787878;
    }
  }

  .car-and-price {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 1rem;

    > h1 {
      margin-right: 4px;
    }

    h1 {
      font-style: bold;
      font-size: 24px;
      display: flex;
      align-items: center;
      color: #383838;
    }
  }

  .date {
    margin-top: 8px;
    margin-bottom: 16px;

    p {
      font-size: 12px;
      display: flex;
      align-items: center;
      color: #787878;

      strong {
        margin-left: 4px;
      }
    }
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;
