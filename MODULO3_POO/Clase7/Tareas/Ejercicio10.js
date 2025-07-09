"use strict";
// Ejercicio 4: Abstracción con Clases Abstractas
// Implementa una clase abstracta DispositivoElectronico con métodos abstractos 
// encender y apagar. Crea dos clases concretas Televisor y Radio, que 
// sobrescriban estos métodos.
// Clase abstracta
class DispositivoElectronico {
}
// Clase concreta: Televisor
class Televisor extends DispositivoElectronico {
    encender() {
        console.log("El televisor se ha encendido. Mostrando imagen...");
    }
    apagar() {
        console.log("El televisor se ha apagado.");
    }
}
// Clase concreta: Radio
class Radio extends DispositivoElectronico {
    encender() {
        console.log("La radio está encendida. Reproduciendo música...");
    }
    apagar() {
        console.log("La radio está apagada.");
    }
}
// Pruebas
const miTV = new Televisor();
miTV.encender(); // El televisor se ha encendido...
miTV.apagar(); // El televisor se ha apagado.
const miRadio = new Radio();
miRadio.encender(); // La radio está encendida...
miRadio.apagar(); // La radio está apagada.
