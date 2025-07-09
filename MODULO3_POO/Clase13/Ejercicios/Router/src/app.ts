// Importamos express
import express from 'express'

// Importamos userRouter (exportamos recien)

import userRouter from './routers/userRouter'

// Instancia de express

const app = express();

// Middleware para parsear json
app.use(express.json())

// Configuración de las rutas
// Asociamos el router 'userRouter' al prefijo '/users
// esto significa que todas rutas definidas como un objeto js estarán disponibles
// bajo la ruta base '/users
app.use('/users', userRouter)

export default app