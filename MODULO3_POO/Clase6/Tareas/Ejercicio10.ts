// Ejercicio 4: Comparación - Clases Abstractas vs Interfaces
// Crea una interfaz PagoOnline con un método procesarPago().
// Crea una clase abstracta Pago con un método concreto validarMonto() y un
// método abstracto completarPago().
// Implementa ambas estructuras en una clase concreta PagoConTarjeta

interface PagoOnline {
    // Metodo de procesar pago
    procesarPago(): void;
}

// Clase abstracta Pago con el método
abstract class Pago {
    protected monto: number;
    // Constructor
    constructor(monto: number) {
        this.monto = monto;
    }
    // Método concreto
    validarMonto(): boolean {
        if(this.monto > 0) {
            console.log("Monto válido");
            return true;
        } else {
            console.log("Monto invalido");
            return false;
        }
    }
    // Método abstracto
    abstract completarPago(): void;
}

class PagoConTarjeta extends Pago implements PagoOnline {
    private numeroTarjeta: string;
    constructor(monto: number, numeroTarjeta: string) {
        super(monto)
        this.numeroTarjeta = numeroTarjeta;
    }
    procesarPago(): void {
        if (this.validarMonto()) {
            this.completarPago();
        } else {
            console.log("No se puede procesar el pago.");
        }
    }
    completarPago(): void {
        console.log(`Procesando pago de $${this.monto} con terminación en tarjeta en ${this.numeroTarjeta.slice(-4)}`);
        
    }
}

const pago = new PagoConTarjeta(250, "1234 5678 9012 3456");
pago.procesarPago();