"use strict";
// Clase Programador
class Programador {
    trabajar() {
        console.log("El programador está escribiendo código en TypeScript.");
    }
}
// Clase Disenador
class Disenador {
    trabajar() {
        console.log("El diseñador está creando prototipos en Figma.");
    }
}
// Función que utiliza polimorfismo
function iniciarTrabajo(empleado) {
    empleado.trabajar();
}
// Pruebas
const empleado1 = new Programador();
const empleado2 = new Disenador();
iniciarTrabajo(empleado1); // El programador está escribiendo código...
iniciarTrabajo(empleado2); // El diseñador está creando prototipos...
