"use strict";
// Definimos un objeto
class Rectangle {
    constructor(width, height) {
        this._height = height;
        this._width = width;
    }
    // Getter para el área del rectangulo
    get area() {
        return this._width * this._height; // Este getter va a devolver el area calculada
    }
    // Si queremos saber solamente la altura, se hace un getter para saber la altura
    get height() {
        return this._height;
    }
    // Si queremos obtener el ancho
    get width() {
        return this._width;
    }
}
// Usamos la Class Rentangle
const rectangulo = new Rectangle(10, 5);
console.log(rectangulo);
// Accedemos a los valos usando los getters
console.log(`Ancho: ${rectangulo.width}`);
console.log(`Altura: ${rectangulo.height}`);
console.log(`Area: ${rectangulo.area}`);
