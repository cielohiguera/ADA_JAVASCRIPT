"use strict";
// 5. Ejercicio de Vacaciones
// Desarrolla una clase Vacacion que tenga propiedades privadas para destino, 
// duracion (en días) y presupuesto. Implementa getters y setters, asegurándote de 
// que duracion no sea menor que 1 y presupuesto sea mayor que 0
class Vacacion {
    constructor(destino, duracion, presupuesto) {
        this._destino = destino;
        this.duracion = duracion; // Usando el setter para validar
        this.presupuesto = presupuesto; // Usando el setter para validar
    }
    // Getter y Setter para destino
    get destino() {
        return this._destino;
    }
    set destino(valor) {
        this._destino = valor;
    }
    // Getter y Setter para duración
    get duracion() {
        return this._duracion;
    }
    set duracion(valor) {
        if (valor >= 1) {
            this._duracion = valor;
        }
        else {
            console.log("Error: La duración debe ser de al menos 1 día.");
            this._duracion = 1;
        }
    }
    // Getter y Setter para presupuesto
    get presupuesto() {
        return this._presupuesto;
    }
    set presupuesto(valor) {
        if (valor > 0) {
            this._presupuesto = valor;
        }
        else {
            console.log("Error: El presupuesto debe ser mayor que 0.");
            this._presupuesto = 1;
        }
    }
    mostrarInfo() {
        console.log(`Destino: ${this._destino}`);
        console.log(`Duración: ${this._duracion} días`);
        console.log(`Presupuesto: $${this._presupuesto}`);
    }
}
// Prueba
const vacacion1 = new Vacacion("Cancún", 7, 1500);
vacacion1.mostrarInfo();
vacacion1.duracion = 0;
vacacion1.presupuesto = -100;
vacacion1.mostrarInfo();
