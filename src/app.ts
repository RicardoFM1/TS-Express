import 'express-async-errors'
import express, { Application } from "express"
import { usuariosRoutes } from "./routes/usuarios.routes"
import { handleErrors } from "./errors"
import { loginRoutes } from "./routes/login.routes"
const app:Application = express()

app.use(express.json())
app.use("/usuarios",usuariosRoutes)
app.use("/login", loginRoutes)


app.use(handleErrors)
export default app