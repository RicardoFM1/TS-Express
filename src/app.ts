import 'express-async-errors'
import express, { Application } from "express"
import { usuariosRoutes } from "./routes/usuarios.routes"
import { handleErrors } from "./errors"
import { postsRoutes } from './routes/posts.routes'
import { loginRoutes } from './routes/login.routes'
const app:Application = express()

app.use(express.json())
app.use("/usuarios",usuariosRoutes)
app.use("/posts",postsRoutes)
app.use("/login",loginRoutes)

app.use(handleErrors)
export default app