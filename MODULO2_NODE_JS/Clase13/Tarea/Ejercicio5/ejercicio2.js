const fs = require('fs');

// Leer el archivo JSON
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Error al leer el archivo:", err);
        return;
    }

    // Convertir el JSON a un objeto de JavaScript
    const jsonData = JSON.parse(data);

    // Modificar el campo "age"
    jsonData.age = 25; 

    // Convertir el objeto modificado de nuevo a JSON
    const newJsonData = JSON.stringify(jsonData, null, 4);

    // Guardar el archivo modificado
    fs.writeFile('data.json', newJsonData, 'utf8', (err) => {
        if (err) {
            console.error("Error al guardar el archivo:", err);
            return;
        }
        console.log("Archivo JSON modificado correctamente.");
    });
});
