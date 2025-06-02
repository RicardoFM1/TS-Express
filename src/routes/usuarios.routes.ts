import { Router } from "express";
import { createUserController, getAllUsersController, getUserIdController } from "../controllers/usuarios.controllers";
import { validateDataMiddleware } from "../middleware/validateData.middleware";
import { createUserSchema } from "../schemas/usuarios.schemas";


export const usuariosRoutes:Router = Router()

usuariosRoutes.post("",validateDataMiddleware(createUserSchema), createUserController)
usuariosRoutes.get("",getAllUsersController)
usuariosRoutes.get("/:id", getUserIdController)
