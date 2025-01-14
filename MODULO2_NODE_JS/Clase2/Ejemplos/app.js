const fs = require('fs'); 

// definimos la ruta del archivo json que vamos a manipular

const rutaArchivo = './productos.json'

// Paso 1: Leer archivos JSON

fs.readFile(rutaArchivo, 'utf8', (err, data) => {
    if (err) {
        console.error("Error al leer el archivo: ", err)
        return // detiene la ejecución
    }

    // Convetimos el contenido del archivo json (texto) a un objeto de javaScript utilizando "json.parse"
    const productos = JSON.parse(data)
    console.log('Productos actuales: ', productos);

    // Paso 2;: Agregar un nuevo producto al listado
    // Creamos un objeto que represeta el nuevo producto
    const nuevoProducto = {
        id: productos.length + 1,
        nombre: 'WebCam',
        precio: 40
    }

    // Agregamos el nuevo producto al array de productos existentes
    productos.push(nuevoProducto)
    console.log('Productos actualizados: ', productos);

    // Paso 3: Escribir al archivo json actualizado para que se agregue convertimos el objeto de js (productos) nuevamente a texto json
    // utilizando json.string.file
    const contenidoActualizado = JSON.stringify(productos, null, 2)

    // Escribimos el nuevo contenido en el archivo y mostramos el error por consola
    fs.writeFile(rutaArchivo, contenidoActualizado, (err) => {
        if (err) {
            console.error('Error al escribir el archivo: ', err)
            return
        }
        console.log('Archivo ejecutado correctament');
        return
    })
})