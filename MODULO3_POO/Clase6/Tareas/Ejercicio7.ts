// Actividades de abstraccion
// Ejercicio 1: Abstracción Básica - Ejemplo del Mundo Real
// Modela un sistema de cafetería. Crea una interfaz Bebida que defina un método
// preparar(). Implementa esta interfaz en dos clases: Cafe y Te. Usa abstracción
// para que ambas bebidas oculten su lógica de preparación interna pero
// expongan un comportamiento común.

interface Bebida {
    preparar(): void;
}

// Clase Cafe implementa bebida
class Cafe implements Bebida {
    preparar(): void {
        this.molerGranos();
        this.hervirAgua();
        this.servirCafe();
    }
    private molerGranos(): void {
        console.log("Moliendo los granos del café...");
    }
    private hervirAgua(): void {
        console.log("Hirviendo agua para el café...");
    }
    private servirCafe(): void {
        console.log("Sirviendo el cafe");
        
    }

}

// Clase Te implementa Bebida
class Te implements Bebida {
    preparar(): void {
      this.hervirAgua();
      this.agregarSaquito();
      this.servirTe();
    }
  
    private hervirAgua(): void {
      console.log("Hirviendo agua para el té...");
    }
  
    private agregarSaquito(): void {
      console.log("Agregando el saquito de té...");
    }
  
    private servirTe(): void {
      console.log("Sirviendo el té...");
    }
  }
  
// Prueba
const bebida1: Bebida = new Cafe();
bebida1.preparar();

console.log('---');
  
const bebida2: Bebida = new Te();
bebida2.preparar();