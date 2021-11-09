import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #fff;
  appearance: none;
  color: #787878;
  font-size: 1rem;
  border-radius: 25px;
  width: 128px;
  height: 40px;

  font-size: 18px;
  font-weight: 700;

  border: 1px solid #787878;

  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transition: all 0.3s;
    transform: scale(1.03);
    color: ${shade(0.8, '#787878')};
  }
`;
