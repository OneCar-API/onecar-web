import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import { AuthProvider } from './context/AuthContext';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes />
        </Router>
      </AuthProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
