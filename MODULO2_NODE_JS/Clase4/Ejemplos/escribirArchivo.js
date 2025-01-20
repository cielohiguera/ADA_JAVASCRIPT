const fs = require('fs') // Paso 1: Importamos el modulo

// Paso 2: Configuramos una variable de nombre datos que contiene los datos a persistir
datos = "Ejemplo de datos que podemos escribrir en un archivo";

// Paso 3: Utilizamos el modulo  fs 'Con el metodo writeFile' que nos permita escribir datos en el archivo
// 1. WF crea el archivo por nosotros, el nombre de dicho archivo, lo pasamos como parametro
// 2. Segundo parametro, es donde guardamos los datos, en este caso, es una variable
// 3. Tercer parametro, hace referencia que hacer si ocurre un error. En el caso de error, va a dar lugar a que se lance el error con un mensaje determinado
fs.writeFile('archivo.txt', datos, function(err){
    if(!err) {
        console.log('Los datos han sido escritos a archivos.txt');
    } else {
        throw err
    }
})

// Paso 4 / EXTRAS:
// Errores: En este tipo de archivos tienen que ver principalmente con intentar escribir en un archivo dentro de un directorio o carpeta, en el cual
// no tenemos acceso o permisos para escribir

// Donde se guarda el archivo: El archivo se va a guardar exactamente en el mismo lugar donde se encuentre el script que lo ejecuta, en este caso
// este archivo si quisieramos que se guardara en otro ruta, tenemos que indicar antes de nombre 'archivo.txt' (ruta completa donde se guarde)
// throw: se utiliza para lanzar una excepción que es una forma de manejar errores o situaciones excepcionales en el código. Cuando se usa el 
// throw podemos detener la ejecucion normal del código y transferir el control o un bloque de código que maneje el error, normalmente es un bloque 
// que se llama try catch