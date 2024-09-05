export default class LocalStorageService {
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }
}
