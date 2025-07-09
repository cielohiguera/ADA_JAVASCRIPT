"use strict";
// Actividades de abstraccion
// Ejercicio 1: Abstracción Básica - Ejemplo del Mundo Real
// Modela un sistema de cafetería. Crea una interfaz Bebida que defina un método
// preparar(). Implementa esta interfaz en dos clases: Cafe y Te. Usa abstracción
// para que ambas bebidas oculten su lógica de preparación interna pero
// expongan un comportamiento común.
// Clase Cafe implementa bebida
class Cafe {
    preparar() {
        this.molerGranos();
        this.hervirAgua();
        this.servirCafe();
    }
    molerGranos() {
        console.log("Moliendo los granos del café...");
    }
    hervirAgua() {
        console.log("Hirviendo agua para el café...");
    }
    servirCafe() {
        console.log("Sirviendo el cafe");
    }
}
// Clase Te implementa Bebida
class Te {
    preparar() {
        this.hervirAgua();
        this.agregarSaquito();
        this.servirTe();
    }
    hervirAgua() {
        console.log("Hirviendo agua para el té...");
    }
    agregarSaquito() {
        console.log("Agregando el saquito de té...");
    }
    servirTe() {
        console.log("Sirviendo el té...");
    }
}
// Prueba
const bebida1 = new Cafe();
bebida1.preparar();
console.log('---');
const bebida2 = new Te();
bebida2.preparar();
