import { Router, Request, Response } from "express";

const userRouter = Router();

// Simulación de base de datos en memoria
let users = [
  { id: 1, name: "Juan", email: "juan@example.com" },
  { id: 2, name: "María", email: "maria@example.com" }
];

// 1. GET - Obtener todos los usuarios
userRouter.get('/', (req: Request, res: Response) => {
  res.json(users);
});

// 2. POST - Crear nuevo usuario
userRouter.post('/', (req: Request, res: Response) => {
  const { name, email } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email
  };
  users.push(newUser);
  res.status(201).json({ message: 'Usuario creado', user: newUser });
});

// 3. PUT - Actualizar usuario por ID
userRouter.put('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  const index = users.findIndex(user => user.id === id);

  if (index === -1) {
    res.status(404).json({ message: `Usuario con ID ${id} no encontrado` });
  }

  users[index] = { id, name, email };
  res.json({ message: `Usuario con ID ${id} actualizado`, user: users[index] });
});

// 4. DELETE - Eliminar usuario por ID
userRouter.delete('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === id);

  if (index === -1) {
    res.status(404).json({ message: `Usuario con ID ${id} no encontrado` });
  }

  const deletedUser = users.splice(index, 1)[0];
  res.json({ message: `Usuario con ID ${id} eliminado`, user: deletedUser });
});

export default userRouter;
