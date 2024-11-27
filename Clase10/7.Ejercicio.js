// Ejercicio 7 - Intercambio de Variables
// Declara dos variables con valores iniciales y luego intercambia sus valores. Muestra los valores antes y despues del intercambio en la consola

let a = 5;
let b = 10;

console.log("Antes del intercambio: a =", a, ", b =", b);
[a, b] = [b, a];

console.log("Después del intercambio: a =", a, ", b =", b);