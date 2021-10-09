import styled from 'styled-components';

interface Props {
    title: string;
}

export const StyledTextArea = styled.div<Props>`
  display: flex;
  flex-direction: column;
  margin: 0;
  textarea {
      background-color:#FFFFFF;
      border-color:#ACB8C2;
      border-radius: 4px;
  }
`;