const fs = require('fs');
const path = require('path')

const dataPath = path.join(__dirname, '../data/vehicles.json')

const vehicleModel = {
    readVehicle : () => {
        const data = fs.readFileSync(dataPath) // leemos el archivo de forma sincronica
        return JSON.parse(data)
    },

    saveVehicle: (vehicles) => {
        fs.writeFileSync(dataPath, JSON.stringify(vehicles, null, 2))
    },
}

module.exports = vehicleModel;