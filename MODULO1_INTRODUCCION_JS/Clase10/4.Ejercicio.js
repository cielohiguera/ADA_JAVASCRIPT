// Ejercicio 4 - Tipo de datos
// Declarar 4 variables utilizando la palabra let y asignarles valores según el tipo de dato que sugiere su nombre.
// Además realizar operaciones y validaciones sobre estos valores. 
let verdadero = true;
let texto = ("Do you like coffee?")
let numero = 25;
let nada = null;

// Operaciones y validaciones
// Realiza una operación matemática usando la variable número, por ejemplo, suma o resta con otro numero de tu elección
let suma = numero + 4;
console.log("Resultado de la suma: ", suma);

// Concatena el string de la variable de texto con otro mensaje adicional
let mensajeAdicional = texto + " Yes, my favorite coffe is latte";
console.log(mensajeAdicional);

// Verifica si la variable verdadero es true o false y muestra un mensaje diferente según el resultado
if (verdadero) {
    console.log("La variable 'verdadero' es true");
} else {
    console.log("La variable 'verdadero' es false");
}
// Implementa una condición para verificar si la variable nada es null y muestra un mensaje si es así
if (nada === null){
    console.log("La variable 'nada' es null");
} else {
    console.log("La variable 'nada' no es null");
}