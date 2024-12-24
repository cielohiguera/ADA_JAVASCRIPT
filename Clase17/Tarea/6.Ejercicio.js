// Ejercicio 6: Autos y más autos…
// Escribe una función "gestionarAutos" que realice las siguientes tareas con
// una lista predefinida de marcas de autos:
// 1. Quite los espacios en blanco alrededor de cada marca.
// 2. Verifique si existe la marca "Tesla".
// 3. Reemplace todas las marcas "Ford" por "BMW".
// 4. Encuentre el índice de la marca "Chevrolet".
// 5. Devuelva una cadena de marcas en orden alfabético separadas por
// puntos. Utilizar “.sort()

let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan";

function gestionarAutos(entrada) {
    // 1. Eliminar los espacios en blanco alrededor de cada marca
    let marcaSinEspacios = entrada.split(",").map(marca => marca.trim());
    
    // 2. Verificar si existe la marca Tesla
    let existeTesla = marcaSinEspacios.includes("Tesla");
    
     // 3. Reemplazar las marcas "Ford" por "BMW" usando replace
     let marcasRemplazadas = marcaSinEspacios.map(marca => marca.replace("Ford", "BMW"));
    
    // 4. Encontrar el índice de la marca "Chevrolet" en el array
    let indiceChevrolet = marcaSinEspacios.indexOf("Chevrolet");
    
    // 5. Devolver una cadena de marcas en orden alfabético separadas por puntos
    let marcasOrdenadas = marcaSinEspacios.sort().join(".");

    // Devolver un objeto con los resultados
    return {
        marcaSinEspacios: marcaSinEspacios,
        existeTesla: existeTesla,
        marcasRemplazadas: marcasRemplazadas,
        indiceChevrolet: indiceChevrolet,
        marcasOrdenadas: marcasOrdenadas
    };
}

let resultado = gestionarAutos(entrada);
console.log(resultado);

// Resultado
// {
//     marcaSinEspacios: [ 'Chevrolet', 'Ford', 'Honda', 'Nissan', 'Toyota' ],
//     existeTesla: false,
//     marcasRemplazadas: [ 'Toyota', 'Honda', 'BMW', 'Chevrolet', 'Nissan' ],
//     indiceChevrolet: 3,
//     marcasOrdenadas: 'Chevrolet.Ford.Honda.Nissan.Toyota'
//   }