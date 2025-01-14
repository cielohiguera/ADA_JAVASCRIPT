// Ejercicio 10: Invertir palabras
// Crea una función que reciba una cadena de texto y devuelva otra cadena
// con las palabras en orden inverso.
// Consigna:
// • Usa el método split() para separar las palabras.
// • Usa el método reverse() para invertir el array.
// • Usa el método join() para unir las palabras en una nueva cadena.

let texto = "Hola mundo desde JavaScript";

function invertirPalabras(texto) {
    return texto.split(" ")
                .reverse()
                .join(" ");
}

console.log(invertirPalabras(texto)); // JavaScript desde mundo Hola