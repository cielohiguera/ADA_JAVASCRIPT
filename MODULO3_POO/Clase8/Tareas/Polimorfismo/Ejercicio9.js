"use strict";
// Clase base CuentaBancaria con encapsulamiento
// Ejercicio 9: Encapsulamiento y Herencia con Protección de Datos
// Crea una clase CuentaBancaria con métodos para depositar y retirar dinero,
// pero protege el saldo para que solo pueda ser modificado dentro de la clase.
// Crea una subclase CuentaAhorros que agregue interés al saldo
class CuentaBancaria {
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial >= 0 ? saldoInicial : 0;
    }
    depositar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log(`Depósito exitoso: $${cantidad}`);
        }
        else {
            console.log("Error: No se puede depositar una cantidad negativa");
        }
    }
    retirar(cantidad) {
        if (cantidad > this.saldo) {
            console.log("Error: Fondos insuficientes");
        }
        else if (cantidad > 0) {
            this.saldo -= cantidad;
            console.log(`Retiro exitoso: $${cantidad}`);
        }
        else {
            console.log("Error: Cantidad inválida");
        }
    }
    consultarSaldo() {
        return this.saldo;
    }
    aumentarSaldo(cantidad) {
        this.saldo += cantidad;
    }
}
// Subclase CuentaAhorros
class CuentaAhorros extends CuentaBancaria {
    constructor(titular, saldoInicial, tasaInteres) {
        super(titular, saldoInicial);
        this.tasaInteres = tasaInteres;
    }
    aplicarInteres() {
        const interes = this.consultarSaldo() * (this.tasaInteres / 100);
        this.aumentarSaldo(interes);
        console.log(`Interés aplicado: $${interes.toFixed(2)}`);
    }
}
// Ejemplo de uso
const cuenta1 = new CuentaAhorros("María López", 1000, 5);
cuenta1.depositar(500);
cuenta1.retirar(200);
console.log("Saldo actual:", cuenta1.consultarSaldo());
cuenta1.aplicarInteres();
console.log("Saldo con interés:", cuenta1.consultarSaldo());
