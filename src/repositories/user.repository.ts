import { User } from '../models/user.model';

const users: User[] = [
  new User('testuser', 'testpassword'),
];

export class UserRepository {
  findUserByUsername(username: string): User | undefined {
    return users.find(user => user.username === username);
  }
}
