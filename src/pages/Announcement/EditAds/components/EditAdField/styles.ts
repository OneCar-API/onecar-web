import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  align-items: center;
  border-left: 1px solid #e5e5e5;
  margin-top: 2.5rem;

  #main-title {
    margin-left: 3.5rem;
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 400;
    color: #787878;
  }
`;
export const Content = styled.div`
  > div {
    margin-left: 3.5rem;
    display: flex;
  }

  #buttons {
    margin-bottom: 2rem;
    height: 2.5rem;
    width: auto;
    font-size: 1.2rem;
    font-weight: 700;
  }

  #default-button {
    margin-left: 1rem;
    width: 8rem;
    height: 2.5rem;
    font-size: 1.2rem;
    font-weight: 700;
  }
`;
