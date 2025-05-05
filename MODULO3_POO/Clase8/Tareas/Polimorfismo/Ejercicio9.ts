// Clase base CuentaBancaria con encapsulamiento
// Ejercicio 9: Encapsulamiento y Herencia con Protección de Datos
// Crea una clase CuentaBancaria con métodos para depositar y retirar dinero,
// pero protege el saldo para que solo pueda ser modificado dentro de la clase.
// Crea una subclase CuentaAhorros que agregue interés al saldo

class CuentaBancaria {
    protected titular: string;
    private saldo: number;
  
    constructor(titular: string, saldoInicial: number) {
      this.titular = titular;
      this.saldo = saldoInicial >= 0 ? saldoInicial : 0;
    }
  
    public depositar(cantidad: number): void {
      if (cantidad > 0) {
        this.saldo += cantidad;
        console.log(`Depósito exitoso: $${cantidad}`);
      } else {
        console.log("Error: No se puede depositar una cantidad negativa");
      }
    }
  
    public retirar(cantidad: number): void {
      if (cantidad > this.saldo) {
        console.log("Error: Fondos insuficientes");
      } else if (cantidad > 0) {
        this.saldo -= cantidad;
        console.log(`Retiro exitoso: $${cantidad}`);
      } else {
        console.log("Error: Cantidad inválida");
      }
    }
  
    public consultarSaldo(): number {
      return this.saldo;
    }
  
    protected aumentarSaldo(cantidad: number): void {
      this.saldo += cantidad;
    }
  }
  
  // Subclase CuentaAhorros
  class CuentaAhorros extends CuentaBancaria {
    private tasaInteres: number; // Porcentaje anual
  
    constructor(titular: string, saldoInicial: number, tasaInteres: number) {
      super(titular, saldoInicial);
      this.tasaInteres = tasaInteres;
    }
  
    public aplicarInteres(): void {
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
  