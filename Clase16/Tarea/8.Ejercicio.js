// Ejercicio 8: Busca un nombre específico
// Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos
// saber si el nombre 'Laura' está presente en la lista y, si lo está, deberías
// devolverlo.

let arrayWithNames = ['Carlos', 'Daniel', 'Laura', 'Ana'];

let lauraIsTheArray = arrayWithNames.find(name => name === 'Laura');
console.log("¿Qué nombre estas buscandon en el array?", lauraIsTheArray); // Resultado Laura