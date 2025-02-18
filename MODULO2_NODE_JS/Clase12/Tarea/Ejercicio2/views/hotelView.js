const { formatResponse } = require("../../../MVC_TCP/views/vehicleViews");

const HotelView = {
    formatResponse: (hotel) => {
        if (!hotel) {
            return JSON.stringify({
                status: "error",
                message: "Hotel no encontrado"
            })
        }
        return JSON.stringify({
            status: "sucess",
            data: hotel
        })
    }
}

module.exports = HotelView;