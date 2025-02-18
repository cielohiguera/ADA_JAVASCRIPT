// Paso 1: Empezamos con el modelo
// Hacemos las importaciones
// fs = file system y es para trabajar con el sistema de archivos
// path = nos ayuda a manejar las rutas de archivos
const fs = require('fs');
const path = require('path');

// Paso 2: Definimos la ruta del archivo 'data.json' que esta en el mismo directorio que este archivo
// _dirname es una variable global que contiene la ruta del archivo del directorio actual.
const dataPath = path.join(__dirname, 'data.json')

// Paso 3: Creamos un objeto que contendre métodos para interacturar con los datos de los vehiculos

const VehicleModel = {
    // Primer métodos para obtener un vehiculo por id
    getVehicleById: (id) => {
        // Leemos el archivo json de manera sincronica
        const rawData = fs.readFileSync(dataPath)
        // Covertimos el contenido del archivo que esta en formato json a javascript
        const vehicle = JSON.parse(rawData)
        // Buscamos el vehiculo cuyo id coincida con el id que se va a proporcionar si no encuentra ningún vehiculo con ese id
        // retorna nulo
        return vehicle.find(vehicle => vehicle.id === id || null);
    }
}
// Exportamos el objeto 'vehicleModel' para que pueda ser utilizado a otros archivos
module.exports = VehicleModel