"use strict";
// Ejercicio 10: Polimorfismo y Sobreescritura Compleja con Interacción entre
// Clases
// Crea una clase Cliente que pueda asociarse a una CuentaBancaria. Crea
// diferentes tipos de clientes, como ClienteVIP que tiene beneficios adicionales.
// Cada tipo de cliente puede realizar depósitos y retiros, pero los clientes VIP
// pueden retirar sin comisiones.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuentaBancaria = void 0;
// Clase CuentaBancaria
class CuentaBancaria {
    constructor(saldoInicial = 0) {
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
    retirar(cantidad, comision = 10) {
        const total = cantidad + comision;
        if (cantidad <= 0) {
            console.log("Error: Cantidad inválida");
        }
        else if (total > this.saldo) {
            console.log("Error: Fondos insuficientes");
        }
        else {
            this.saldo -= total;
            console.log(`Retiro exitoso: $${cantidad} (Comisión: $${comision})`);
        }
    }
    consultarSaldo() {
        return this.saldo;
    }
}
exports.CuentaBancaria = CuentaBancaria;
// Clase base Cliente
class Cliente {
    constructor(nombre, cuenta) {
        this.nombre = nombre;
        this.cuenta = cuenta;
    }
    depositar(cantidad) {
        console.log(`Cliente ${this.nombre} depositando...`);
        this.cuenta.depositar(cantidad);
    }
    retirar(cantidad) {
        console.log(`Cliente ${this.nombre} retirando con comisión estándar...`);
        this.cuenta.retirar(cantidad); // comisión por defecto de $10
    }
    mostrarSaldo() {
        console.log(`Saldo de ${this.nombre}: $${this.cuenta.consultarSaldo()}`);
    }
}
// Subclase ClienteVIP que sobrescribe el método retirar
class ClienteVIP extends Cliente {
    constructor(nombre, cuenta) {
        super(nombre, cuenta);
    }
    retirar(cantidad) {
        console.log(`Cliente VIP ${this.nombre} retirando sin comisión...`);
        this.cuenta.retirar(cantidad, 0); // sin comisión
    }
}
// Ejemplo de uso
const cuenta1 = new CuentaBancaria(1000);
const cliente1 = new Cliente("Ana Pérez", cuenta1);
const clienteVIP = new ClienteVIP("Carlos Gómez", new CuentaBancaria(2000));
cliente1.depositar(200);
cliente1.retirar(300);
cliente1.mostrarSaldo();
clienteVIP.depositar(500);
clienteVIP.retirar(1000);
clienteVIP.mostrarSaldo();
