// Ejercicio 9: Sistema de Gestión de Vehículos
// 1. Crea un sistema de gestión de Vehículos que incluya las siguientes clases:
// o Vehiculo: Clase base con propiedades como marca, modelo y un
// método para mostrar información del vehículo.
// o Coche: Clase que extiende Vehiculo e incluye una propiedad para
// tipoCombustible y un método para mostrar la información completa
// del coche.
// o Motocicleta: Clase que extiende Vehiculo e incluye una propiedad
// para cilindrada y un método para mostrar la información completa
// de la motocicleta

// Clase base Vehiculo
class Vehiculo {
    marca: string;
    modelo: string;
  
    constructor(marca: string, modelo: string) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    mostrarInformacion(): void {
      console.log(`Vehículo: ${this.marca} ${this.modelo}`);
    }
  }
  
  // Clase Coche que hereda de Vehiculo
  export class Coche extends Vehiculo {
    tipoCombustible: string;
  
    constructor(marca: string, modelo: string, tipoCombustible: string) {
      super(marca, modelo); // Llama al constructor de Vehiculo
      this.tipoCombustible = tipoCombustible;
    }
  
    mostrarInformacion(): void {
      console.log(`Coche: ${this.marca} ${this.modelo} | Combustible: ${this.tipoCombustible}`);
    }
  }
  
  // Clase Motocicleta que hereda de Vehiculo
  class Motocicleta extends Vehiculo {
    cilindrada: number;
  
    constructor(marca: string, modelo: string, cilindrada: number) {
      super(marca, modelo); // Llama al constructor de Vehiculo
      this.cilindrada = cilindrada;
    }
  
    mostrarInformacion(): void {
      console.log(`Motocicleta: ${this.marca} ${this.modelo} | Cilindrada: ${this.cilindrada}cc`);
    }
  } 

const vehiculoGenerico = new Vehiculo("Ford", "F-150");
vehiculoGenerico.mostrarInformacion();

const miCoche = new Coche("Toyota", "Corolla", "Gasolina");
miCoche.mostrarInformacion();

const miMoto = new Motocicleta("Yamaha", "MT-03", 321);
miMoto.mostrarInformacion();