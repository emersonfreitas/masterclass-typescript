import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Emerson', email: 'emersonfreitasn@gmail.com' },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { name: 'Emerson Freitas', email: 'emersonfreitasn@gmail.com' },
      message: { subject: 'Bem-vindo ao sistema', body: 'Seja bem-vindo' }
    });

    return res.send();
  }
};
