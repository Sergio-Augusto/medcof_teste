import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { UserRepository } from '../repositories/user.repository';

const userRepository = new UserRepository();
const authService = new AuthService(userRepository);

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Endpoints relacionados à autenticação
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Realiza a autenticação do usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Autenticação bem-sucedida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       400:
 *         description: Dados faltando ou incorretos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       403:
 *         description: Credenciais inválidas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
export class AuthController {
  static async login(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send({ message: 'Username and password are required' });
    }

    try {
      const token = authService.login(username, password);
      if (token) {
        return res.status(200).send({ token });
      } else {
        return res.status(403).send({ message: 'Invalid credentials' });
      }
    } catch (error) {
      return res.status(500).send({ message: 'Internal server error' });
    }
  }
}
