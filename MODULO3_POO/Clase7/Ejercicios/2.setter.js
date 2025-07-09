"use strict";
// Definimos una class triangulo
class Triangle {
    constructor() {
        this._base = 0;
        this._height = 0;
    }
    // Setter para la base, con validación de números
    set base(value) {
        if (value > 0) {
            this._base = value;
        }
        else {
            console.log('La base debe ser mayor a 0');
        }
    }
    // Setter para altura con validación
    set height(value) {
        if (value > 0) {
            this._height = value;
        }
        else {
            console.log('La altura debe ser mayor a 0');
        }
    }
    // Metodo para calcular el area del tringulo
    calculateArea() {
        return (this._base * this._height) / 2;
    }
}
// Usamos la clase triangulo
const triangulo = new Triangle();
// Usamos setter para establecer nuevos valores
triangulo.base = 10;
triangulo.height = 5;
// Calculamos el area
console.log(`Area del triangulo: ${triangulo.calculateArea()}`);
// Probamos con numeros no validos
triangulo.height = -5;
triangulo.base = -10;
console.log(`Area del triangulo: ${triangulo.calculateArea()}`);
