"use strict";
// Ejercicio 6: Encapsulamiento en clases
// Crea una clase CuentaBancaria que tenga atributos privados como saldo y un
// método público para consultar el saldo y otro para depositar dinero.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuentaBancaria = void 0;
class CuentaBancaria {
    constructor(saldo) {
        this.saldo = saldo;
    }
    // Método para consultar el saldo
    consultarSaldo() {
        return this.saldo;
    }
    // Método para depositar saldo
    depositar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
        }
    }
}
exports.CuentaBancaria = CuentaBancaria;
const miCuentaBancaria = new CuentaBancaria(1000);
console.log(miCuentaBancaria.consultarSaldo()); // Resultado: 1000
miCuentaBancaria.depositar(500);
console.log(miCuentaBancaria.consultarSaldo()); // Resultado: 1500
