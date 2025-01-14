// Ejercicio 8: Contador de letras
// Crea una función que reciba una cadena de texto y una letra, y devuelva
// cuántas veces aparece esa letra en la cadena.
// Consigna:
// • Usa un bucle for y condicionales.
// • Haz que la búsqueda no distinga entre mayúsculas y minúsculas.

let texto = "Programar es divertido";
let letra = "r"

function contarLetra(texto, letra) {
    let contador = 0;
    texto = texto.toLowerCase();
    letra = letra.toLowerCase();

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === letra) {
            contador++;
        }
    }
    return contador;
}

console.log(contarLetra(texto, letra)); // 4