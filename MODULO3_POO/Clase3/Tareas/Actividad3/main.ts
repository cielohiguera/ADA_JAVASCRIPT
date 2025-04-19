// Actividad 3: Exportación por Defecto
// Crea un módulo llamado user.ts que contenga una función:• createUser(name: string, age: number): devuelve un objeto con name y
// age.
// Exporta la función como exportación por defecto. En main.ts, importa
// createUser, crea un usuario y muestra su información en la consola.


import createUser from "./user";

const usuario = createUser("Jennifer", 25)

console.log("Usuario creado:");
console.log(`Nombre: ${usuario.name}`);
console.log(`Edad: ${usuario.age}`);