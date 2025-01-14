// Ejercicio 9: Eliminar espacios innecesarios
// Tienes la siguiente cadena con espacios adicionales
// " Hola, mundo! "
// Elimina los espacios al inicio y al final y muestra la cadena resultante.

let saludo = " Hola, mundo! ";
// Utilizando el metodo trim se eliminaran los espacios en el string
let cadenaSinEspacios = saludo.trim();
console.log("Cadena después de utilizar el método trim:", cadenaSinEspacios)
// Resultado: Cadena después de utilizar el método trim: Hola, mundo!