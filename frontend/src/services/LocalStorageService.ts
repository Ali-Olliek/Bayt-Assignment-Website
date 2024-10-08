import { User } from '../classes/User';

export class AuthenticatedUser extends User {
  public token: string;
  constructor(user: any) {
    super(user);
    this.token = user.token;
  }
}

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

    const user = new AuthenticatedUser(JSON.parse(userData));

    return user;
  }
}
