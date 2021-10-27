import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  width: 778px;

  > img {
    width: 100%;
    height: 509px;
    border-radius: 16px;
  }

  .gallery {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 2rem;
    width: 100%;

    img {
      width: 95px;
      height: 95px;
      border-radius: 16px;
    }
  }
`;
