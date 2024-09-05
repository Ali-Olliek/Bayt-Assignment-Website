import { User } from '../classes/User';

export type AuthenticatedUser = User & {
  token: string;
};

export default class LocalStorageService {
  private static instance: LocalStorageService;

  private constructor() {}

  public static getInstance(): LocalStorageService {
    if (!LocalStorageService.instance) {
      LocalStorageService.instance = new LocalStorageService();
    }

    return LocalStorageService.instance;
  }

  saveUser(user: AuthenticatedUser) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  deleteUser() {
    localStorage.removeItem('user');
  }

  getUser(): AuthenticatedUser | null {
    let userData = localStorage.getItem('user');

    if (!userData) return null;

    const user = JSON.parse(userData) as AuthenticatedUser;

    return user;
  }
}
