import bcrypt from 'bcryptjs';
import { IUser } from '../interfaces/user.interface';

export class User implements IUser {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = bcrypt.hashSync(password, 10);
  }

  static validatePassword(password: string, hashedPassword: string): boolean {
    return bcrypt.compareSync(password, hashedPassword);
  }
}
