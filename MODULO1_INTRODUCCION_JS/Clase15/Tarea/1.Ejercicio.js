// Ejercicio 1: Añadir personajes a una lista
// Tienes una lista de personajes de videojuegos ["Link", "Zelda"]. Agrega los
// personajes "Mario" y "Luigi" al final de la lista utilizando el método
// adecuado. Luego, muestra el array actualizado.

// Definir primero el array
let personajesVideojuegos = ["Link", "Zelda"];
console.log("Personajes del videojuego antes de añadir más personajes", personajesVideojuegos);
// Resultado: Personajes del videojuego antes de añadir más personajes [ 'Link', 'Zelda' ]

// Se añaden más personajes al array
personajesVideojuegos.push("Mario", "Luigui");
console.log("Personajes del videojuego después de añadir más personajes", personajesVideojuegos);
// Resultado: Personajes del videojuego después de añadir más personajes [ 'Link', 'Zelda', 'Mario', 'Luigui' ]