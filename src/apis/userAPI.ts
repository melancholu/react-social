import base from './baseAPI';
import { Pagination, User } from '../types/dto';

const UserAPI = {
  async getUsers(page: number): Promise<Pagination<User>> {
    const params = new URLSearchParams();
    params.append('page', page.toString());

    const response = await base.get('/user', {
      params,
    });

    return response.data;
  },
};

export default UserAPI;
