import { useState, useEffect } from 'react';
import UserAPI from '../apis/userAPI';
import { User, Meta } from '../types/dto';

export default function useUser() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);
  const [meta, setMeta] = useState<Meta | null>(null);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      if (isLoading) {
        return;
      }

      setIsLoading(true);

      const response = await UserAPI.getUsers(meta?.next_page || 1);

      setUsers([...users, ...response.data]);
      setMeta(response.meta);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    users,
    hasMore: (meta?.cur_page ?? 0) < (meta?.page_num ?? 0),
    fetchMore: getUsers,
  };
}
