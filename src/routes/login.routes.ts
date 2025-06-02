import { validateDataMiddleware } from "../middleware/validateData.middleware";
import { compare } from "bcryptjs";
import { Router, Request, Response } from "express";
import { createLoginSchema } from "../schemas/login.schemas";
import { Usuarios } from "../entities/usuarios.entitie";
import { AppError } from "../errors";
import { AppDataSource } from "../data-source";
export const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  validateDataMiddleware(createLoginSchema),
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const userRepository = AppDataSource.getRepository(Usuarios);
    const user = await userRepository.findOneBy({ email });

    if (!user) {
      return res.status(401).json({ message: "Dados inválidos" });
    }

    const senhaCorreta = await compare(password, user.password);

    if (!senhaCorreta) {
      return res.status(401).json({ message: "Dados inválidos" });
    }

    return res.json({ message: "Login bem-sucedido" });
  }
);
