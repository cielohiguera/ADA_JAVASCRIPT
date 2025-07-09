"use strict";
// Ejercicio 4: Comparación - Clases Abstractas vs Interfaces
// Crea una interfaz PagoOnline con un método procesarPago().
// Crea una clase abstracta Pago con un método concreto validarMonto() y un
// método abstracto completarPago().
// Implementa ambas estructuras en una clase concreta PagoConTarjeta
// Clase abstracta Pago con el método
class Pago {
    // Constructor
    constructor(monto) {
        this.monto = monto;
    }
    // Método concreto
    validarMonto() {
        if (this.monto > 0) {
            console.log("Monto válido");
            return true;
        }
        else {
            console.log("Monto invalido");
            return false;
        }
    }
}
class PagoConTarjeta extends Pago {
    constructor(monto, numeroTarjeta) {
        super(monto);
        this.numeroTarjeta = numeroTarjeta;
    }
    procesarPago() {
        if (this.validarMonto()) {
            this.completarPago();
        }
        else {
            console.log("No se puede procesar el pago.");
        }
    }
    completarPago() {
        console.log(`Procesando pago de $${this.monto} con terminación en tarjeta en ${this.numeroTarjeta.slice(-4)}`);
    }
}
const pago = new PagoConTarjeta(250, "1234 5678 9012 3456");
pago.procesarPago();
