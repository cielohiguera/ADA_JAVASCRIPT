// Ejercicio 2: Numero mayor (funcion expresada)
// crear una funcion expresada llamada encontrarMayor que reciba dos numeros como parametros devuelve el numero mayor.
const encontrarMayor = function (a, b) {
    if (a > b) {
        return a; // Devuelve "a" si es mayor
    } else {
        return b; // Devuelve "b" si es mayor
    }
}
console.log("El mayor de 15 y 20 es: ", encontrarMayor(15, 20));