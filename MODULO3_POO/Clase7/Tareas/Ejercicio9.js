"use strict";
// Ejercicio 3: Encapsulamiento con Métodos Privados
// Crea una clase Banco con un saldo inicial privado. El saldo solo puede ser 
// modificado a través de un método depositar y otro retirar, los cuales deben 
// validar que la cantidad no sea negativa. Implementa métodos públicos para 
// consultar el saldo.
class Banco {
    constructor(saldoInicial) {
        this._saldo = saldoInicial >= 0 ? saldoInicial : 0;
    }
    // Método público para consultar el saldo
    consultarSaldo() {
        return this._saldo;
    }
    // Método público para depositar dinero
    depositar(cantidad) {
        if (this.validarCantidad(cantidad)) {
            this._saldo += cantidad;
            console.log(`Depósito exitoso: $${cantidad}. Nuevo saldo: $${this._saldo}`);
        }
        else {
            console.log("Error: La cantidad a depositar no puede ser negativa.");
        }
    }
    // Método público para retirar dinero
    retirar(cantidad) {
        if (this.validarCantidad(cantidad)) {
            if (cantidad <= this._saldo) {
                this._saldo -= cantidad;
                console.log(`Retiro exitoso: $${cantidad}. Saldo restante: $${this._saldo}`);
            }
            else {
                console.log("Error: Fondos insuficientes.");
            }
        }
        else {
            console.log("Error: La cantidad a retirar no puede ser negativa.");
        }
    }
    // Método privado para validar montos positivos
    validarCantidad(cantidad) {
        return cantidad >= 0;
    }
}
// Pruebas
const miCuenta = new Banco(100);
console.log("Saldo actual:", miCuenta.consultarSaldo());
miCuenta.depositar(50); // Depósito exitoso
miCuenta.retirar(30); // Retiro exitoso
miCuenta.retirar(200); // Error: Fondos insuficientes
miCuenta.depositar(-20); // Error: Cantidad negativa
miCuenta.retirar(-10); // Error: Cantidad negativa
