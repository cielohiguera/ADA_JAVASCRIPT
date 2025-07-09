// Importamos el modulo router desde express
import { Router } from "express";

// Instancia del router
const userRouter = Router()

// Definimos las siguientes rutas básicas de usuarios
// Ruta GET - Obtener

userRouter.get('/', (req, res) => {
    res.json({message: 'Obtener todos los resultados'})
})

// Ruta POST - Crear
userRouter.post('/', (req, res) => {
    const {name, email} = req.body // extraemos los datos enviados
    res.status(201).json({message: 'Usuario creado', user: {name, email}})
})


// 3. Ruta PUT - actualizar, se tiene que hacer por id
userRouter.put('/:id', (req, res) => {
    const {id} = req.params // extraemos el id del paramentro de la url
    const {name, email} = req.body // extraemos los nuevos datos enviados en el cuerpo de la soli
    res.json({message: `Usuario con ID ${id} actualizado.`})
})

// 4. Ruta DELETE - borrar
userRouter.delete('/:id', (req, res) => {
    const {id} = req.params // extraemos el id del parametro de la url
    res.json({message: `Usuario con el id: ${id}, borrado con exito.`})
})

export default userRouter
