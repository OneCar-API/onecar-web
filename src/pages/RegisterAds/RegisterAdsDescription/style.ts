import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  align-items: center; 
  justify-content: center;
  background: #F9F9F9;
  background-size: cover;
  height: 100vh;
 
`;

export const IconVoltar =styled.div`
position: absolute;
width: 40px;
left: 68px;
button{
  border: 0;
  background: #e5e5e5;
}
`

export const Header = styled.header`
  padding: 15px;
  background: #e5e5e5;
  align-items: center;
  
    `;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  > img {
    height: 35px;
  }
  cursor: pointer;
`;

export const First = styled.form`
  width: 600px;
  display: flex;
  margin-left: 100px;
  input {
    flex: 1;
    height: 30px;
    padding: 0 24px;
    border: 0;
    border-radius: 25px 0 0 25px;
    color: #3a3a3a;
    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    margin-left: auto;
    background: #fff;
    border: 0;
    border-radius: 0 25px 25px 0;
    transition: background-color 0.2s;
    width: 50px;
    height: 30px;
    &:hover {
      background: ${shade(0.2, '#ffffff')};
    }
    svg {
      color: var(--blue);
      width: 16px;
      height: 16px;
      margin-top: 5px;
    }
  }
`;

export const Profile = styled.div`
  align-items: center;
  img {
    margin-left: 20px;
    width: 35px;
    height: 35px;
  }
`;

export const Content = styled.div`
  margin-top: 16px;
  align-items: center;
  display: flex;
  flex-direction: column; 
  place-content: center;
  h1{
    font-size: 48px;
    color: #383838;
    margin-bottom: 5rem;
    }
    form {
    margin: 10px 0;
    width: 600px;
    align-items: center;
    text-align: center;
     }  
  div {
        align-items: center;
        }
  
  h2{ 
    margin-top:32px;
    text-align: left;
    color: #808080;
    font-size: 400;
  }
  textarea{
    padding: 16px;
    margin-top: 16px;
   
    color: #808080;
    font-size: 16px;
    font-family:'Nunito', sans-serif;
  }
  
`;