import React from "react";
import { Login } from './pages/Login';

import GlobalStyle from "./styles/global";

import SignIn from "./pages/SignIn";
import AlterPassword from "./pages/AlterPassword";


const App: React.FC=()=> {
  return (
    <>
    <SignIn/>

    {/* <AlterPassword/> */}
    <GlobalStyle/>
    <GlobalStyle />
    </>
  );
}

export default App;
