import React, { createContext, useCallback, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
  location: string;
}

interface AllowUserCredentials {
  token: string;
}

interface AuthContextData {
  user: object;
  token: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  allowUser(token: AllowUserCredentials): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@OneCar:token');
    const user = localStorage.getItem('@OneCar:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password, location }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    console.log('aqui', response.data);
    const { token, user } = response.data;

    console.log(user.is_active);

    localStorage.setItem('@OneCar:token', token);
    localStorage.setItem('@OneCar:user', JSON.stringify(user));

    setData({ token, user });

    if (user.is_active === true) {
      history.push('/adverts');
    } else {
      history.push(`/reset-password${location}`);
      // history.push(`/reset-password?token=${}`)
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@OneCar:token');
    localStorage.removeItem('@OneCar:user');

    setData({} as AuthState);
  }, []);

  const allowUser = useCallback(async ({ token }) => {
    console.log(token);
    const response = await api.patch('/user/confirm', {
      token,
    });
    console.log(response);
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ token: data.token, user: data.user, signIn, signOut, allowUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
