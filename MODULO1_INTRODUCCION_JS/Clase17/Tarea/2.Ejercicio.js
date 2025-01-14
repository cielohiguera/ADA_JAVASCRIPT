// Ejercicio 2: Análisis y Modificación de Cadenas de Texto
// Pide al usuario que ingrese una oración. Luego, escribe la función
// “procesarOracion” que haga lo siguiente:
// 1. Quite los espacios en blanco al principio y al final.
// 2. Divida la oración en palabras.
// 3. Reemplace todas las vocales 'a' por '@'. Tener en cuenta utilizar
// “/a/g” que indica que se debe buscar todas las apariciones del
// carácter 'a' en la cadena (la bandera g es para global, lo que
// significa que reemplazará todas las apariciones, no solo la primera).
// 4. Encuentre la posición de la primera aparición de la palabra
// "javascript". De no aparecer retornar -1
// 5. Convierta la oración a una cadena de palabras separadas por
// guiones.

const prompt = require('prompt-sync')();

let oracion = prompt("Ingresa una oración: ");

function procesarOracion (oracion) {
    // Quitar espacios en blanco de principio y final de la oracion
    let oracionSinEspacio = oracion.trim();
    // Dividir la oracion en palabras
    let palabras = oracionSinEspacio.split(" ");
    // remplazar la vocal "a" por @
    let remplazarPalabra = oracionSinEspacio.replace(/a/g, "@");
    // Encontrat la posición de la primera aparición de la palabra "JavaScript"
    let javascript = oracionSinEspacio.toLowerCase().indexOf("javascript");
    // Convertir la oracion a una cadena de palabras separadas por guiones
    let oracionGuiones = palabras.join("-");

    return {
        oracionSinEspacio: oracionSinEspacio,
        palabras: palabras,
        remplazarPalabra: remplazarPalabra,
        javascript: javascript,
        oracionGuiones: oracionGuiones
    };
}

let resultado = procesarOracion(oracion);
console.log(resultado);

