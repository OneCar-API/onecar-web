import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-top: 2rem;
  max-width: 1440px;
  width: 100%;

  img {
    width: 778px;
  }

  @media (max-width: 840px) {
    flex-direction: column;
  }
`;
