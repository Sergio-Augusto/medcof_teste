import jwt from 'jsonwebtoken';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../models/user.model';

export class AuthService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  login(username: string, password: string): string | null {
    const user = this.userRepository.findUserByUsername(username);
    if (user && User.validatePassword(password, user.password)) {
      const token = jwt.sign({ username }, process.env.JWT_SECRET!, { expiresIn: '1h' });
      return token;
    }
    return null;
  }
}
