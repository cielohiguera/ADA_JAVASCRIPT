// Ejercicio 6: Tu lista de metas
// Consigna:
// Es momento de planear tus metas. Crea un archivo llamado metas.json
// con una lista vacía al principio. Luego, agrega metas como: “Aprender
// Node.js” y “Viajar a Japón”. Guarda la lista actualizada en el archivo.
// Pista: Usa fs.writeFile para crear el archivo y agregar elementos a la
// lista.

// Importamos el modulo fs oara manejar archivos 
const fs = require('fs');
// Creamos una lista vacía de metas

let metas = [];

// Agregamos metas a la lista

metas.push('Aprender Node.js');
metas.push('Viajar a Europa');

// Escribimos la lista en el archivo metas.json

fs.writeFile('metas.json', JSON.stringify(metas, null, 2), (err) => {
    if(err) {
        console.error('Error al crear tu lista de metas', metas);
    } else {
        console.log('Lista de metas creada');
    }
})