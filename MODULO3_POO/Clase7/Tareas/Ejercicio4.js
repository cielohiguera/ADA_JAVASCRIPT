"use strict";
// 4. Ejercicio de Aviones
// Crea una clase Avion con propiedades privadas para el modelo, capacidad y 
// velocidad. Implementa getters y setters para cada propiedad, asegurándote de 
// validar que la capacidad no sea menor que 0 y que la velocidad no sea negativa.
// Nota sobre la inicialización de propiedades
// En la clase Avion, se debe utilizar el operador de afirmación no nula (!) en las 
// propiedades _capacidad y _velocidad. Esto se hace para evitar un error de 
// TypeScript que indica que estas propiedades no estaban inicializadas en el 
// constructor. Este enfoque asegura que las propiedades serán asignadas 
// adecuadamente en el constructor mediante el uso de los setters, manteniendo 
// así la validación de los valores. Tener esto en cuenta para los demás ejercicios.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avion = void 0;
class Avion {
    constructor(modelo, capacidad, velocidad) {
        this._modelo = modelo;
        this.capacidad = capacidad; // usando el setter
        this.velocidad = velocidad; // usando el setter
    }
    // Getter y Setter para modelo
    get modelo() {
        return this._modelo;
    }
    set modelo(valor) {
        this._modelo = valor;
    }
    // Getter y Setter para capacidad
    get capacidad() {
        return this._capacidad;
    }
    set capacidad(valor) {
        if (valor >= 0) {
            this._capacidad = valor;
        }
        else {
            console.log("Error: La capacidad no puede ser menor que 0.");
            this._capacidad = 0;
        }
    }
    // Getter y Setter para velocidad
    get velocidad() {
        return this._velocidad;
    }
    set velocidad(valor) {
        if (valor >= 0) {
            this._velocidad = valor;
        }
        else {
            console.log("Error: La velocidad no puede ser negativa.");
            this._velocidad = 0;
        }
    }
    mostrarInfo() {
        console.log(`Modelo: ${this._modelo}`);
        console.log(`Capacidad: ${this._capacidad} pasajeros`);
        console.log(`Velocidad: ${this._velocidad} km/h`);
    }
}
exports.Avion = Avion;
// Prueba
const avion1 = new Avion("Boeing 747", 416, 920);
avion1.mostrarInfo();
avion1.capacidad = -5;
avion1.velocidad = -300;
avion1.mostrarInfo();
