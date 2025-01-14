// Ejercicio 7: “La Floreria”
// Escribe una función "gestionarFloreria" que realice las siguientes tareas
// con una lista predefinida de nombres de flores:
// 1. Quite los espacios en blanco alrededor de cada flor.
// 2. Verifique si existe la flor "Margarita" y, si está presente, agregue
// "Azucena" al final de la lista.
// 3. Reemplace todas las flores "Orquídea" por "Clavel".
// 4. Encuentre el índice de la flor "Girasol" y, si no está presente, agregue
// "Girasol" al inicio de la lista.
// Devuelva una cadena de flores en orden alfabético separadas por puntos.

let entrada = "Rosa, Tulipan, Orquidea, Lirio";

function gestionarFloreria(entrada) {
    // 1. Eliminar los espacios en blanco alrededor de cada flor
    let flores = entrada.split(",").map(flor => flor.trim());
    
    // 2. Verificar si existe la flor "Margarita" y agregar "Azucena" si es necesario
    let estaMargarita = flores.includes("Margarita");
    let azucena = flores.push("Azucena");
    
    // 3. Reemplazar todas las flores "Orquídea" por "Clavel"
    let remplazarflores = flores.map(flor => flor.replace("Orquidea", "Clavel"));
    
    // 4. Encontrar el índice de la flor "Girasol" y agregarla al inicio si no está
    let indiceGirasol = flores.indexOf("Girasol");
    let agregarGirasol = flores.unshift("Girasol");
    
    // 5. Devolver una cadena de flores en orden alfabético separadas por puntos
    let floresOrdenadas = flores.sort().join(".");

    return {
        flores: flores,
        estaMargarita: estaMargarita,
        azucena: azucena,
        remplazarflores: remplazarflores,
        indiceGirasol: indiceGirasol,
        agregarGirasol: agregarGirasol,
        floresOrdenadas
    };
}

let resultado = gestionarFloreria(entrada);
console.log(resultado);
// {
//     flores: [ 'Azucena', 'Girasol', 'Lirio', 'Orquidea', 'Rosa', 'Tulipan' ],
//     estaMargarita: false,
//     azucena: 5,
//     remplazarflores: [ 'Rosa', 'Tulipan', 'Clavel', 'Lirio', 'Azucena' ],
//     indiceGirasol: -1,
//     agregarGirasol: 6,
//     floresOrdenadas: 'Azucena.Girasol.Lirio.Orquidea.Rosa.Tulipan'

