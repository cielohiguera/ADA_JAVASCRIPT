const { formatResponse } = require("../../../MVC_TCP/views/vehicleViews");

const BookView = {
    formatResponse: (book) => {
        if (!book) {
            return JSON.stringify({
                status: "error",
                message: "Libro no encontrado"
            })
        }
        return JSON.stringify({
            status: "sucess",
            data: book
        })
    }
}

module.exports = BookView