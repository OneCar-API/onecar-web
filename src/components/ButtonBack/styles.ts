import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #5e9dbc;
  height: 44px;
  border-radius: 25px;
  border: 0;
  color: #ffffff;
  width: 144px;
  font-weight: bold;
  font-size: 24px;
  margin-top: 16px;
  transition: background-color 0.2s;
  align-self: right;

  &:hover {
    background: ${shade(0.2, '#5E9DBC')};
    font-size: 30px;
  }
`;
