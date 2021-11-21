import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #25d366;
  color: #fff;
  font-size: 18px;
  border: 0;
  border-radius: 25px;
  transition: background-color 0.2s;
  height: 40px;
  gap: 0.5rem;

  background: #25d366;
  border-radius: 25px;

  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  display: flex;
  align-items: center;
  text-align: center;

  img {
    width: 20px;
  }

  &:hover {
    transition: all 0.3s;
    transform: scale(1.03);
    background: ${shade(0.2, '#25D366')};
  }
`;
