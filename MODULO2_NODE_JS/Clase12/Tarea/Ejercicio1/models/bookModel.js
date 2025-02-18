// Paso 1: Empezamos el modelo
// Hacemos importaciones

const fs = require('fs');
const path = require('path');

// Paso 2: Definimos la ruta del archivo 'data.json' que esta en el mismo directorio
//_dirname es una variable local que contiene la ruta del archivo del directorio
const dataPath = path.join(__dirname, 'data.json')

// Paso 3: Creamos un objeto que contendra los métodos para interactuar

const BookModel = {
    getBookById: (id) => {
        const rawData = fs.readFileSync(dataPath)
        const book = JSON.parse(rawData)
        return book.find(book => book.id === id || null);
    }
}

module.exports = BookModel 