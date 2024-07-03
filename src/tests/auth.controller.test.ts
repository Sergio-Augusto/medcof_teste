import request from 'supertest';
import app from '../app';
import dotenv from 'dotenv';

dotenv.config();

describe('Auth Controller', () => {
  it('should return 400 if username or password is missing', async () => {
    const response = await request(app).post('/api/auth/login').send({});
    expect(response.status).toBe(400);
  });

  it('should return 403 if credentials are invalid', async () => {
    const response = await request(app).post('/api/auth/login').send({ username: 'invalid', password: 'invalid' });
    expect(response.status).toBe(403);
  });

  it('should return 200 if credentials are valid', async () => {
    const response = await request(app).post('/api/auth/login').send({ username: 'testuser', password: 'testpassword' });

    expect(response.status).toBe(200);
  });
});
