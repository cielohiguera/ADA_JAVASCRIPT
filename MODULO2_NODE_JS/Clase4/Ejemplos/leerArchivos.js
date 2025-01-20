// Paso 1: Importamos el modulo
const fs = require('fs')

// Paso 2: Usamos el metodo readfile
// Primer argumento: Archivo leer. Si el archivo no esta en el mismo directorio
// 2. Segundo argumento: La codificacion, utf-8(unicode transfomation 8bit y es una codificacion de caractares que se utilizan poara presentar texto
// en computadoras y en la web)
// 3. Tercer argumento - callback:
// A. Parametro 1 err: un objeto de error que indica si algo salio mal durante la lectura del archivo
// B. Parametro 2 data: contiene contenido del archivo leido si no hubo error 
fs.readFile('archivo.txt', 'utf-8', function(err, data) {
    if(!err) {
        console.log(data);
    } else {
        throw err
    }
});