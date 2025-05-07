// Ejercicio 6: Encapsulamiento en clases
// Crea una clase CuentaBancaria que tenga atributos privados como saldo y un
// método público para consultar el saldo y otro para depositar dinero.

export class CuentaBancaria {
    private saldo: number;

    constructor(saldo: number) {
        this.saldo = saldo;
    }
    // Método para consultar el saldo
    public consultarSaldo(): number {
        return this.saldo;
    }

    // Método para depositar saldo
    public depositar(cantidad: number): void {
        if(cantidad > 0) {
            this.saldo += cantidad;
        }
    }
}

const miCuentaBancaria = new CuentaBancaria(1000)
console.log(miCuentaBancaria.consultarSaldo()); // Resultado: 1000
miCuentaBancaria.depositar(500)
console.log(miCuentaBancaria.consultarSaldo()); // Resultado: 1500