// Ejercicio 1 método array
let razasDePerros = ["Labrador", "Bulldog", "Beagle", "Pug"];
console.log("Array inicial; ", razasDePerros);

// 1. Método push: Agrega uno o más elementos al final del array y lo devuelve
razasDePerros.push("Husky");
console.log("Despues de push (husky): ", razasDePerros);
// Resultado: Despues de push (husky):  [ 'Labrador', 'Bulldog', 'Beagle', 'Pug', 'Husky' ]

// 2. Metodo pop: Elimina el último elemento del array y lo devuelve
let razasEliminada = razasDePerros.pop();
console.log("Despues de pop():", razasDePerros);
console.log("Raza eliminada con el pop:", razasEliminada);
// Resultado: Despues de pop(): [ 'Labrador', 'Bulldog', 'Beagle', 'Pug' ]

// 3. Metodo shift: Elimina el primer elemento del array y lo devuelve
let primeraRaza = razasDePerros.shift();
console.log("Despues de shift():", razasDePerros);
console.log("Raza eliminada con shift:", primeraRaza);
// Resultado: Despues de shift(): [ 'Bulldog', 'Beagle', 'Pug' ]
// Raza eliminada con shift: Labrador

// 4. Método unshift: Agrega uno o más elementos al incio del array
razasDePerros.unshift("Chihuahua");
console.log("Despues de unshift('Chihuahua'):", razasDePerros);
// Resultado: Despues de unshift('Chihuahua'): [ 'Chihuahua', 'Bulldog', 'Beagle', 'Pug' ]

// 5. Método join: Une todos los elementos del array en un string, separados por un delimitador
let razasEnString = razasDePerros.join(" - ");
console.log("Array unido con join (' - '): ", razasEnString);
// Resultado: Array unido con join (' - '):  Chihuahua - Bulldog - Beagle - Pug

// 6. Metodo indexOf: Devuelve el primer indice donde se encuentra el elemento (o -1 si no esta)
let indiceBeagle = razasDePerros.indexOf("Beagle");
console.log("Indice de 'Beagle' con indexOf: ", indiceBeagle);
// Resultado: Indice de 'Beagle' con indexOf:  2

// 7. Metodo lastIndexOf: Devuelve el último índice donde se encuentra el elemento (o -1 si no está)
let razasDuplicadas = ["Bulldog", "Beagle", "Pug", "Beagle", "Dalmata"];
console.log("Array con duplicados: ", razasDuplicadas);
let ultimoIndiceBeagle = razasDuplicadas.lastIndexOf("Beagle");
console.log("Ultimo índice de 'Beagle' con lastIndexOf: ", ultimoIndiceBeagle);

// 8 Método includes: Devuelve true si el elemento existe en el array, falso si no
let tienePug = razasDePerros.includes("Pug");
console.log("¿El array incluye pug?", tienePug);
// Resultado true
let tieneDalmata = razasDePerros.includes("Dalmata");
console.log("¿El array incluye 'Dalmata'?", tieneDalmata);
// Resultado false