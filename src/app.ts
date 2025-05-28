import express, { Application } from "express"
import { usuariosRoutes } from "./routes/usuarios.routes"
import 'express-async-errors'
const app:Application = express()

app.use(express.json())
app.use("/usuarios",usuariosRoutes)

export default app