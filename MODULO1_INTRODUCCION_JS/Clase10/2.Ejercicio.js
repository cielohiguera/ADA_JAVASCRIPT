// Ejercicio 2: Escribe un programa que pida al usuario su nombre, su edad, peso, luego muestre  un mensaje personalizado que incluya toda esta
// informacion
const prompt = require('prompt-sync')();
// Pedir al usuario que ingrese su nombre, edad y peso
let nameUsuario = prompt('Ingresa tu nombre: ');
let ageUsuario = parseFloat(prompt('Ingresa tu edad: ')); 
let weightUsuario = parseFloat(prompt('Ingresa tu peso en kg: '));
// Mostrar al usuario mensaje personalizado
console.log(`Hola ${nameUsuario}, tu edad es ${ageUsuario} anios y tu peso es ${weightUsuario} kilogramos`);