import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { socket, SocketContext } from './context/socket.js';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <SocketContext.Provider value={socket}>
      <Router>
        <AppProvider>
          <Routes />
        </AppProvider>

        <GlobalStyle />
      </Router>
    </SocketContext.Provider>

  );
};

export default App;
