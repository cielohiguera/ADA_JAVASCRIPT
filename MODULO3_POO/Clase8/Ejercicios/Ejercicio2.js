"use strict";
// Actividades de Herencia:
// Ejercicio 7: Herencia Múltiple Indirecta y Modificadores de Acceso
// Consigna: Define una clase base Negocio con un método protegido operar().
// Define otra clase Consultoria que herede de Negocio y sobrescriba el método
// operar() para mostrar un mensaje sobre cómo opera el negocio de consultoría
// Clase base
class Negocio {
    operar() {
        console.log("El negoco esta operando de forma general");
    }
    // Método publico para llamar al método protegido desde fuera
    inciarOperacion() {
        this.operar();
    }
}
// Clase derivada
class consultoria extends Negocio {
    operar() {
        console.log("El negocio de consultoria opera bnrindando asesoramiento especializado");
    }
    inciarOperacion() {
        this.operar();
    }
}
// Prueba
const miConsultoria = new consultoria();
miConsultoria.inciarOperacion();
