// Ejercicio 5: Uso de Arrays y Condicionales
// Crear un programa que solicite al usuatio ingresar 5 nombres y los almacene en un array. Luego, solicita
// al usuario ingresar un nombre y verificar si este se encunetre en el array 

// Denominar un array para guardar los nombres
const prompt = require('prompt-sync')();
let names = [];

// Definir el nombre de los nombres
const namePeople = 5;

// Crear un ciclo para guardar los nombres en los arrays;
for (let i = 0; i < namePeople; i++){
    let people = prompt(`Nombre de la persona ${i + 1}: `);
    names[i] = people;
}
// Pedir al usuario que ingrese otro nombre 
let searchName = prompt("Ingresa un nombre para buscar: ");

// Generar un bucle para encontrar a la persona
let search = false;
for (let i = 0; i < namePeople; i++) {
    if (names [i] === searchName) {
        search = true;
        break;
    }
}

// Mostrar resultado

if (search) {
    console.log("El nombre se encuentra dentro del arreglo");
} else {
    console.log("El nombre no se encuentra dentro del arreglo");
}