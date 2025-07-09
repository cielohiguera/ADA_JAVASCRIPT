"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importamos express
const express_1 = __importDefault(require("express"));
// Importamos userRouter (exportamos recien)
const userRouter_1 = __importDefault(require("./routers/userRouter"));
// Instancia de express
const app = (0, express_1.default)();
// Middleware para parsear json
app.use(express_1.default.json());
// Configuración de las rutas
// Asociamos el router 'userRouter' al prefijo '/users
// esto significa que todas rutas definidas como un objeto js estarán disponibles
// bajo la ruta base '/users
app.use('/users', userRouter_1.default);
exports.default = app;
