import AuthAPI from '../apis/authAPI';

export default function useAuth() {
  const login = async (email: string, password: string) => {
    try {
      const response = await AuthAPI.login(email, password);

      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await AuthAPI.logout();
    } catch (error) {
      console.error(error);
    }
  };

  const refresh = async () => {
    try {
      const response = await AuthAPI.refresh();

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    login,
    logout,
    refresh,
  };
}
