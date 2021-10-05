import styled, { keyframes } from 'styled-components';

export const ModalBlock = styled.div`
  align-items: center;
  bottom: 0;
  justify-content: center;
  left: 0;
  overflow: hidden;
  padding: 0.4rem;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  opacity: 1;
  z-index: 2;
`;

export const ModalOverlay = styled.a`
  background: rgba(30, 30, 30, 0.75);
  bottom: 0;
  cursor: default;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: ease-in 1s;
`;

interface ModalContainerProps {
    maxWidth: string;
    width: string;
};

export const ModalContainer = styled.div<ModalContainerProps>`
  background: #ffffff;
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  max-width: ${(props) => props.maxWidth};
  padding: 0 0.8rem;
  width: ${(props) => props.width};
  min-width: 400px;
  animation: reverse 0.8s ease 1;
  z-index: 1;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
  border-radius: 13px;
 
`;

interface ModalBodyProps {
    contentDisplay: string;
}

export const ModalBody = styled.div<ModalBodyProps>`
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
 
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #303742;
  padding: 20px 5px 10px 5px;
`;

export const ModalTitle = styled.span`
  font-size: 5vh;
  font-weight: 500;
`;

export const ModalFooter = styled.div`
  padding: 10px 0px;
  text-align: right;

  >div{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
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