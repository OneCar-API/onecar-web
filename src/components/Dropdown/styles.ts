import styled, { keyframes } from 'styled-components';

export const DropdownBlock = styled.div`
  align-items: baseline;
  bottom: 0;
  justify-content: right;
  left: 0;
  overflow: hidden;
  padding: 0.4rem;
  position: fixed;
  right: 0;
  top: 70px;
  display: flex;
  opacity: 1;
  z-index: 2;
`;

export const DropdownOverlay = styled.a`
  background: rgba(30, 30, 30, 0);
  bottom: 0;
  cursor: default;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: ease-in 1s;
`;

interface DropdownContainerProps {
    maxWidth: string;
    width: string;
};

export const DropdownContainer = styled.div<DropdownContainerProps>`
  background: #ffffff;
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
  max-height: 200px;
  max-width: ${(props) => props.maxWidth};
  padding: 0 0.8rem;
  width: ${(props) => props.width};
  min-width: 100px;
  animation: reverse 0.8s ease 1;
  z-index: 1;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
  border-radius: 13px;
 
`;

interface DropdownBodyProps {
    contentDisplay: string;
}

export const DropdownBody = styled.div<DropdownBodyProps>`
  overflow-y: auto;
  padding: 30px 10px;
  position: relative;
  justify-content: center;
  font-size: 17px;

  >div{
    display: ${(props) => props.contentDisplay};
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  button {
      font-size: 20px;
      width: 250px;
      text-align: left;
      border: none;
      background: #fff;
      &:hover{
          background: #e5e5e5;
      }
  }
 
`;

interface BaseAnimationProps {
    display: string;
}

export const BaseAnimation = styled.div<BaseAnimationProps>`  
  animation-duration: 0.2s;  
  animation-timing-function: ease;      
  animation-delay: 0.1s;  
  animation-iteration-count: 1;  
  animation-direction: normal; 
  animation-fill-mode: both;  
  animation-play-state:  running;  
  display: ${props => props.display};
`; 


const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`; 
export const FadeIn = styled(BaseAnimation)`
  animation-name: ${FadeInAnimation};
`; 