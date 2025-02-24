// DESAFIO Ejercicio 6: Hash de Contraseña con Sal
// Crea un script en Node.js que permita al usuario ingresar una contraseña
// y un "sal" (un valor aleatorio que se usa para añadir seguridad). Luego,
// genera un hash de la contraseña combinada con el "sal" usando el
// algoritmo SHA-256. Muestra el hash generado.

const crypto = require("crypto");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingresa tu contraseña: ", (password) => {
  // Generar un salt aleatorio de 16 bytes en formato hexadecimal
  const salt = crypto.randomBytes(16).toString("hex");

  //Hash usando SHA-256
  const hash = crypto.createHash("sha256").update(password + salt).digest("hex");

  console.log("\nSalt generado:", salt);
  console.log("Hash de la contraseña:", hash);

  rl.close();
});
