import React from "react";

import GlobalStyle from "./styles/global";

import SignIn from "./pages/SignIn";
import AlterPassword from "./pages/AlterPassword";


const App: React.FC=()=> {
  return (
    <>
    <SignIn/>
    
    {/* <AlterPassword/> */}
    <GlobalStyle/> 
    </>
  );
}

export default App;
