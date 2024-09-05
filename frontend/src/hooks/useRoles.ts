import LocalStorageService from '../services/LocalStorageService';

const useRole = () => {
  const localStorageService = LocalStorageService.getInstance();

  const user = localStorageService.getUser();

  return { isAdmin: user?.isAdmin };
};

export { useRole };
