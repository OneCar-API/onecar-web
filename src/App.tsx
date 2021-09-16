import React from "react";
import { Login } from './pages/Login';

import GlobalStyle from "./styles/global";

import SignIn from "./pages/SignIn";
import AlterPassword from "./pages/AlterPassword";
import NewPassword from "./pages/NewPassword";
import SignUp from './pages/SignUp'


const App: React.FC=()=> {
  return (
    <>
      <GlobalStyle/>
      {/* <NewPassword/> */}
      {/* <AlterPassword/> */}
      <SignIn/>
      {/* <SignUp/> */}
      <GlobalStyle />
    </>
  );
}

export default App;
