// Ejercicio 4: Transformación y Análisis de Cadenas
// Pide al usuario que ingrese una lista de nombres separados por comas.
// Los nombres a ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”,
// “Pablo” y “Pedro”.
// Luego, escribe la función “transformarYAnalizarNombres”que realice las
// siguientes tareas:
// 1. Quite los espacios en blanco alrededor de cada nombre.
// 2. Verifique si existe el nombre "Juan"
// 3. Reemplace todos los nombres "María" por "Ana".
// 4. Encuentre el índice del nombre "Pedro".
// 5. Devuelva una cadena de nombres en orden alfabético separados
// por puntos. Investigar el método “.sort()”
// https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const prompt = require('prompt-sync')();
let nombres = prompt("Ingresa una lista de nombres separados por comas: ");

function transformarYAnalizarNombres(nombresIngresados) {
    // Quitar los espacios en blanco alrededor de cada nombre
    let nombresSinEspacios = nombresIngresados.split(",").map(nombre => nombre.trim());

    // ¿Existe el nombre de Juan?
    let existeJuan = nombresSinEspacios.some(nombre => nombre.toLowerCase() === "juan");

    // Reemplazar todos los nombres de "Maria" por "Ana"
    let nombresReemplazados = nombresSinEspacios.map(nombre => nombre.toLowerCase() === "maria" ? "ana" : nombre);

    // Encontrar el índice del nombre "Pedro"
    let indicePedro = nombresReemplazados.findIndex(nombre => nombre.toLowerCase() === "pedro");

    // Devolver una cadena de nombres en orden alfabético separados por puntos
    let nombresOrdenados = nombresReemplazados.sort().join(".");

    return {
        nombresSinEspacios: nombresSinEspacios,
        existeJuan: existeJuan,
        nombresReemplazados: nombresReemplazados,
        indicePedro: indicePedro,
        nombresOrdenados: nombresOrdenados
    };
}

let resultado = transformarYAnalizarNombres(nombres);
console.log(resultado);

// Resultado
// Ingresa una lista de nombres separados por comas: juan, pedro, maria
// {
//   nombresSinEspacios: [ 'juan', 'pedro', 'maria' ],
//   existeJuan: true,
//   nombresReemplazados: [ 'ana', 'juan', 'pedro' ],
//   indicePedro: 1,
//   nombresOrdenados: 'ana.juan.pedro'
// }
