import jwt from 'jsonwebtoken';

export const generateToken = (username: string): string => {
  return jwt.sign({ username }, process.env.JWT_SECRET!, { expiresIn: '1h' });
};
