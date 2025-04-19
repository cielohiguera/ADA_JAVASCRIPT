// Declaración e inicialización de la tupla

export let persona: [string, number];

// Inicialización de la tupla
persona = ['Ana', 25]

// Acceder a los elementos de la tupla
console.log("Nombre: ", persona[0]);
console.log("Edad: ", persona[1]);

// Modificamos
persona[1] = 28
console.log("Edad actualizada: ", persona[1]);

// Desestructuración de la tupla
let [nombre, edad] = persona
console.log(`La persona se llama ${nombre} y tiene ${edad} anios`);
