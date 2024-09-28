import React, { createContext, useContext, useState, ReactNode } from 'react';
import AuthAPI from '../apis/authAPI';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '../constants';

interface AuthContextType {
  isLoggedIn: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem(ACCESS_TOKEN_KEY) !== null
  );

  const login = async (email: string, password: string) => {
    try {
      const response = await AuthAPI.login(email, password);

      localStorage.setItem(ACCESS_TOKEN_KEY, response.accessToken);
      localStorage.setItem(REFRESH_TOKEN_KEY, response.refreshToken);
      setIsLoggedIn(true);

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await AuthAPI.logout();

      localStorage.removeItem(ACCESS_TOKEN_KEY);
      localStorage.setremoveItemItem(REFRESH_TOKEN_KEY);
      setIsLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
