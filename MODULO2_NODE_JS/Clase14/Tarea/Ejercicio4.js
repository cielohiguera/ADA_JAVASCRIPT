// Ejercicio 4: Ordenar una Lista de Números
// Crea un script en Node.js que permita al usuario ingresar una lista de
// números separados por comas. Ordena los números de menor a mayor y
// muestra la lista ordenada.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Ingresa una lista de números separados por comas: ', (input) => {
    // Convertir el imput en un array de números
    const numbers = input
    .split(",")
    .map((num) => parseFloat(num.trim()))

    if(numbers.length === 0) {
        console.log('Favor de ingresar una lista de números invalidos');
    } else {
        const sortednumbers = numbers.sort((a, b) => a- b);
        console.log('Lista ordenada: ', sortednumbers.join(", "));
    }
    rl.close();
})