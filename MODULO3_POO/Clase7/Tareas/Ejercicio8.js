"use strict";
// Ejercicio 2: Polimorfismo con Sobreescritura de Métodos (Tiempo de Ejecución)
// Crea una jerarquía de clases de Vehiculo con dos clases derivadas: Coche y 
// Moto. Cada clase debe sobrescribir el método arrancar de la clase base para 
// proporcionar una implementación específica de cómo arrancar.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
// Clase base
class Vehiculo {
    arrancar() {
        console.log("El vehículo está arrancando...");
    }
}
exports.Vehiculo = Vehiculo;
// Clase derivada: Coche
class Coche extends Vehiculo {
    arrancar() {
        console.log("El coche arranca con llave y motor encendido.");
    }
}
// Clase derivada: Moto
class Moto extends Vehiculo {
    arrancar() {
        console.log("La moto arranca girando la llave y presionando el botón de encendido.");
    }
}
// Pruebas
const vehiculoGenerico = new Vehiculo();
vehiculoGenerico.arrancar(); // El vehículo está arrancando...
const miCoche = new Coche();
miCoche.arrancar(); // El coche arranca con llave y motor encendido.
const miMoto = new Moto();
miMoto.arrancar(); // La moto arranca girando la llave y presionando el botón de encendido.
