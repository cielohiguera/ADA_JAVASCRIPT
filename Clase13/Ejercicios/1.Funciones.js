// 1. Funcion mas utilizada declarada
// Una funcion tradicional de JS, se define como una palabra
// reservada function, es un bloque de codigo y tiene una funcionalidad y que se
// va a reutilizar

function calcularAreaRectangulo(base, altura){
    return base * altura; // formula para calcular
}
console.log("Area de un rectangulo:", calcularAreaRectangulo(10, 5));
// 2. Declarada
// No esta en variable y tiene un nombre (nombrada)
function esPar(numero) {
    if (numero % 2 === 0) {
        return "Es par"; // Si el numero es divisible entre 2, es par.
     } else {
        return "Es impar" // Si no es, es impar
     }
}
console.log("El numero 7:", esPar(7));
console.log("El numero 8:", esPar(8));

// Pasos para que la funcion FUNCIONE
// 1. Declarar (Hacer la maqueta de las funcion)
// 2. Imprimir (Usando console.log)
// 3. Invocar (Dentro del console.log)

// 3. Funcion Expresada: Se guarda en variable y es anonima
const encontrarMayor = function (a, b) {
    if (a > b) {
        return a; // Devuelve "a" si es mayor
    } else {
        return b; // Devuelve "b" si es mayor
    }
}
console.log("El mayor de 15 y 20 es: ", encontrarMayor(15, 20));