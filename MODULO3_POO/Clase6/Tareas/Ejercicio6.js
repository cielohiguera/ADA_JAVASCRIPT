"use strict";
// Ejercicio 6: Herencia con Métodos Sobrescritos y super
// Consigna: Crea una clase base Zoologico con el método abrirPuertas(), que
// indique que el zoológico está abierto. Crea una clase derivada ZoologicoSafari
// que sobrescriba el método abrirPuertas() pero llamando al método de la clase
// base con super.
class Zoologico {
    abrirPuertas() {
        console.log("El zoologico está abierto al público");
    }
}
// Clase derivada
class ZoologicoSafari extends Zoologico {
    abrirPuertas() {
        // Llamar al método de abrir puertas de la clase base
        super.abrirPuertas();
        // Agregar comportamiento adicional
        console.log("Bienvenidos al safari: preparense para una aventura");
    }
}
// Prueba
const safari = new ZoologicoSafari();
safari.abrirPuertas();
