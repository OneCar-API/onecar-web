import styled, {css} from "styled-components";


export const Container = styled.div`
align-self: center;
background: #FFFFFF;
border-radius: 5px;
border: 2px solid #ACB8C2;
padding: 16px;
width: 100%;

display: flex;
align-items: center;

& + div{
  margin-top: 8px;
}


input{
  flex: 1;
  background: transparent;
  border:0;
  margin-right: 16px;
      }     
    
`;

