"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pago = void 0;
// La función procesar un pago y cada uno se comporte de manera diferente
// de acuerdo a la implementación que utilicemos
// Clase base 
class Pago {
}
exports.Pago = Pago;
// Hacemos una clase derivada con un comportamiento especifico
class PagoConTarjeta extends Pago {
    procesarPago(monto) {
        console.log(`Pago de $${monto} procesado con tarjeta de crédito`);
    }
}
class PagoEnEfectivo extends Pago {
    procesarPago(monto) {
        console.log(`Pago de $${monto} procesado con tarjeta en efectivo`);
    }
}
class PagoPorTransferencia extends Pago {
    procesarPago(monto) {
        console.log(`Pago de $${monto} procesado con tarjeta en Transferencia`);
    }
}
// Uso del polimorfismo
const procesar = (pago, monto) => {
    pago.procesarPago(monto);
};
const formaDePago1 = new PagoConTarjeta();
const formaDePago2 = new PagoEnEfectivo();
const formaDePago3 = new PagoPorTransferencia();
procesar(formaDePago1, 100);
procesar(formaDePago2, 50);
procesar(formaDePago3, 500);
