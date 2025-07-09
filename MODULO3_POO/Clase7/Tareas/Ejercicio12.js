"use strict";
// Clase que implementa ambas interfaces
class Pato {
    volar() {
        console.log("El pato está volando sobre el lago.");
    }
    nadar() {
        console.log("El pato está nadando en el agua.");
    }
}
// Prueba
const pato = new Pato();
pato.volar(); // El pato está volando sobre el lago.
pato.nadar(); // El pato está nadando en el agua.
