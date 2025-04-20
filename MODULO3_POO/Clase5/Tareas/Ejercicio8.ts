// Ejercicio 8: Integramos contenidos - Animales1. Crea un pequeño sistema de gestión de Animales que incluya las clases
// Animal, Mascota, y MascotaExotica.
// o La clase Animal debe tener propiedades como nombre y tipo.
// o La clase Mascota debe extender Animal e incluir una propiedad para
// dueño.
// o La clase MascotaExotica debe extender Animal e incluir una
// propiedad para habitat.
// 2. Implementa métodos para mostrar información sobre cada tipo de animal
// y agrega ejemplos de instanciación.

// Clase base

export class Animal {
    public nombre: string;
    public tipo: string;

    constructor(nombre: string, tipo: string) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    public mostrarInformacion(): void {
        console.log(`Nombre: ${this.nombre}, Tipo: ${this.tipo}`)
    }
}

// crear clase para extender animal

class Mascota extends Animal {
    public dueno: string;

    constructor(nombre: string, tipo: string, dueno: string) {
        super(nombre, tipo)
        this.dueno = dueno;
    }

    public mostrarInformacion(): void {
        super.mostrarInformacion(); // Llamar metodo base
        console.log(`Dueño: ${this.dueno}`)
    }
}

 // Clase MascotaExotica que extiende Animal
 class MascotaExotica extends Animal {
    public habitat: string;
  
    constructor(nombre: string, tipo: string, habitat: string) {
      super(nombre, tipo); // Llama al constructor de la clase base
      this.habitat = habitat;
    }
  
    public mostrarInformacion(): void {
      super.mostrarInformacion(); // Llama al método de la clase base
      console.log(`Hábitat: ${this.habitat}`);
    }
  }
  
  // Ejemplo de uso
  const miPerro = new Mascota("Rex", "Perro", "Juan");
  miPerro.mostrarInformacion();
  
  const miTigre = new MascotaExotica("Tigre", "Felino", "Selva");
  miTigre.mostrarInformacion();