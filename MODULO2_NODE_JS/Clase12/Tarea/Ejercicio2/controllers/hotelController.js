const { handleRequest } = require('../../../MVC_TCP/controllers/vehicleControllers')
const HotelModel = require('../models/hotelModel')
const HotelView = require('../views/hotelView')


// Función para manejar la solicitud del cliente
const hotelController = {
    handleRequest: (id) => {
        const hotel = HotelModel.getHotelById(parseInt(id, 10));

        return HotelView.formatResponse(hotel);
    }
}

module.exports = hotelController