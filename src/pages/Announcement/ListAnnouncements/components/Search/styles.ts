import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 32px;
  padding: 1rem;
  width: 100%;
  max-width: max-content;

  .to-type {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem;
    width: 313px;
    height: 40px;
    border: 1px solid #787878;
    box-sizing: border-box;
    border-radius: 25px;
    margin-right: 1rem;

    img {
      height: 18px;
      margin-right: 1rem;
    }

    input {
      border: none;
    }
  }

  .km {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      margin-right: 8px;
    }

    input {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0.5rem;
      width: 99px;
      height: 40px;
      border: 1px solid #787878;
      box-sizing: border-box;
      border-radius: 25px;
      margin-right: 1rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 0rem;

    div {
      margin-bottom: 1rem;
    }
  }
`;
