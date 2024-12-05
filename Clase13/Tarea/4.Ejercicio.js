// Ejercicio 4: Numero par o impar
// Crear una funcion llamada esPar que escriba un numero y devuelva "Es par" si el numero es par o "Es impar" si el numero es impar. Usa
// una variable local para guardar el resultado
function esPar(numero) {
    if (numero % 2 === 0) {
        return "Es par"; // Si el numero es divisible entre 2, es par.
     } else {
        return "Es impar" // Si no es, es impar
     }
}
console.log("El numero 5:", esPar(5));
console.log("El numero 4:", esPar(4));