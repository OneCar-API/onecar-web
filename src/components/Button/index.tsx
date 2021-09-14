import React,{ButtonHTMLAttributes} from "react";

import{Container} from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;




const Button: React.FC<ButtonProps> = ({children, ...rest})=>(
<Container type="button" {...rest}>
  {children}
</Container>

);

export default Button;





// import React from "react";

// import Container from "./styles";

//  type ButtonProps = {
//    children: string;
//  }


// const Button = (props: ButtonProps)=> {
//   return (
//     <>
//     <Container/>
//     <button type="button" >
//       {props.children}
//       </button>    
//     </>
//     )
// }

// export default Button;

