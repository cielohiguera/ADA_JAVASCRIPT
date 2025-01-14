// Ejercicio 4: Contando vocales 🅰️🅾️
// Crea una función que reciba una cadena de texto y devuelva cuántas
// vocales contiene.
// Consigna:
// • Usa un bucle for y condicionales.
// • Considera vocales mayúsculas y minúsculas (a, e, i, o, u).

let texto = "Hola Mundo";
function contarVocales(texto){
    let contador = 0;
    for(let i = 0; i < texto.length; i++){
        let ltr = texto[i]
        if(ltr == 'a' || ltr == 'e' || ltr == 'i' || ltr == 'o' || ltr == 'u'){
            contador++;
        }
    }
    return contador;
}
console.log(contarVocales(texto));