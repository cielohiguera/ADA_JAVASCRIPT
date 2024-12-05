// Ejercicio 10: Factorial de un numero 
// Crear una funcion expresada llamada calcularFactorial que reciba un numero y devuelva su factorial
const prompt = require('prompt-sync')();
let numeroFactorial = parseFloat((prompt("Ingresa un numero para obtener su numero factorial: ")));
function calcularFactorial (numeroFactorial) {
    if (numeroFactorial < 0) {
        console.log("No se obtienen numeros factoriales de numeros negativos");
    } else if (numeroFactorial === 0 || numeroFactorial === 1) {
        return 1;
    }
    let factorial = 1;
    for (let i = 2; i <= numeroFactorial; i++) {
        factorial *= i;
    }
    return factorial;
}

// Calcular el factorial del número ingresado por el usuario
console.log(`El factorial de ${numeroFactorial} es ${calcularFactorial(numeroFactorial)}`);