import React from "react";
import { Login } from './pages/Login';

import GlobalStyle from "./styles/global";

import SignIn from "./pages/SignIn";
import AlterPassword from "./pages/AlterPassword";
import NewPassword from "./pages/NewPassword";


const App: React.FC=()=> {
  return (
    <>
      <GlobalStyle/>
      {/* <NewPassword/> */}
      {/* <AlterPassword/> */}
      <SignIn/>
      <GlobalStyle />
    </>
  );
}

export default App;
