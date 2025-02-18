const fs = require('fs')
const path = require('path')

const dataPath = path.join(__dirname, 'data.json')

// Función para obtener la disponibilidad de un hotel por su ID
const HotelModel = {
    getHotelById: (id) => {
        const rawData = fs.readFileSync(dataPath)
        const hotel = JSON.parse(rawData)
        return hotel.find(hotel => hotel.id === id || null);
    }
}

module.exports = HotelModel;