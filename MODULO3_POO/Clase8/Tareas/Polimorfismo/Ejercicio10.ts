// Ejercicio 10: Polimorfismo y Sobreescritura Compleja con Interacción entre
// Clases
// Crea una clase Cliente que pueda asociarse a una CuentaBancaria. Crea
// diferentes tipos de clientes, como ClienteVIP que tiene beneficios adicionales.
// Cada tipo de cliente puede realizar depósitos y retiros, pero los clientes VIP
// pueden retirar sin comisiones.

// Clase CuentaBancaria
export class CuentaBancaria {
    private saldo: number;
  
    constructor(saldoInicial: number = 0) {
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
  
    public retirar(cantidad: number, comision: number = 10): void {
      const total = cantidad + comision;
      if (cantidad <= 0) {
        console.log("Error: Cantidad inválida");
      } else if (total > this.saldo) {
        console.log("Error: Fondos insuficientes");
      } else {
        this.saldo -= total;
        console.log(`Retiro exitoso: $${cantidad} (Comisión: $${comision})`);
      }
    }
  
    public consultarSaldo(): number {
      return this.saldo;
    }
  }
  
  // Clase base Cliente
  class Cliente {
    protected nombre: string;
    protected cuenta: CuentaBancaria;
  
    constructor(nombre: string, cuenta: CuentaBancaria) {
      this.nombre = nombre;
      this.cuenta = cuenta;
    }
  
    public depositar(cantidad: number): void {
      console.log(`Cliente ${this.nombre} depositando...`);
      this.cuenta.depositar(cantidad);
    }
  
    public retirar(cantidad: number): void {
      console.log(`Cliente ${this.nombre} retirando con comisión estándar...`);
      this.cuenta.retirar(cantidad); // comisión por defecto de $10
    }
  
    public mostrarSaldo(): void {
      console.log(`Saldo de ${this.nombre}: $${this.cuenta.consultarSaldo()}`);
    }
  }
  
  // Subclase ClienteVIP que sobrescribe el método retirar
  class ClienteVIP extends Cliente {
    constructor(nombre: string, cuenta: CuentaBancaria) {
      super(nombre, cuenta);
    }
  
    public override retirar(cantidad: number): void {
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
  