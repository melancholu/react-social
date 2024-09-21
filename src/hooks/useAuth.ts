import { useState } from 'react';
import AuthAPI from '../apis/authAPI';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '../constants';

export default function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  return {
    isLoggedIn,
    login,
    logout,
  };
}
