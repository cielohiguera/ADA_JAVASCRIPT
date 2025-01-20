// Ejercicio 7: Encuentra tu meta perdida
// Consigna:
// Revisa tu lista de metas en el archivo metas.json. Busca si una meta
// específica, como “Viajar a Japón”, ya está incluida. Si no, agrégala.
// Pista: Usa fs.readFile para leer el archivo y un método como find para
// buscar en la lista.

// Importamos el modulo fs para manejar los archivos

const fs = require('fs');

// Meta a encontrar

const metaBuscar = 'Viajar a Europa';

// Leemos el arcchivo de metas.json

fs.readFile('metas.json', 'utf-8', (err, data) => {
    if(err) {
        console.error('Error al leer tu archivo de metas:', err);
    } else {
        // Convertimos el contenido en una lista
        let metas = JSON.parse(data);
        // Verificamos si la meta se encuentra dentro del archivo .json
        if (metas.includes(metaBuscar)) {
            console.log(`¡La meta "${metaBuscar}" ya esta en la lista!`)
        } else {
            // Si no esta la incluimos
            metas.push(metaBuscar);

            fs.writeFile('metas.json', JSON.stringify(metas, null, 2), (err) => {
                if(err) {
                    console.error('Error al actualizar tu lista de metas', err);
                } else {
                    console.log(`¡Meta "${metaBuscar}" agregada con éxito!`)
                }
            });
        }
    }
});