import { Base } from './Base';

export class User extends Base {
  public email: string;
  public username: string;
  public isAdmin: boolean;
  public phoneNumber?: string;
  constructor(user: any) {
    super(user);
    this.email = user.email;
    this.isAdmin = user.is_admin;
    this.username = user.username;
    this.phoneNumber = user?.phone_number;
  }
}
