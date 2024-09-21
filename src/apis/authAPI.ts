import base from './baseAPI';
import { User, Token } from '../types/dto';

const AuthAPI = {
  async login(email: string, password: string): Promise<User & Token> {
    const response = await base.post('/auth/login', {
      email,
      password,
    });

    return response.data;
  },
  async logout(): Promise<void> {
    const response = await base.post('/auth/logout', {});

    return response.data;
  },
  async refresh(): Promise<Token> {
    const response = await base.post('/auth/refresh', {});

    return response.data;
  },
};

export default AuthAPI;
