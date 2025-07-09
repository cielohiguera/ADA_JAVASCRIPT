"use strict";
// Ejercicio 8: Sistema de Nave Espacial con Gestión de Recursos
// Crea un sistema para gestionar una nave espacial en una misión de recolección
// de recursos en diferentes planetas. Define una clase NaveEspacial con atributos
// como combustible y capacidadDeCarga. Implementa métodos para viajar entre
// planetas, recolectar recursos (oxígeno, minerales, agua), y gestionar el
// combustible. Usa tuplas para representar las coordenadas espaciales de los
// planetas y una interfaz para los tipos de recursos recolectados.
class Planeta {
    constructor(nombre, coordenadas, recursos) {
        this.nombre = nombre;
        this.coordenadas = coordenadas;
        this.recursos = recursos;
    }
}
// Clase para nave espacial
class NaveEspacial {
    constructor(combustibleInicial, capacidadDeCarga) {
        this.combustible = combustibleInicial;
        this.capacidadDeCarga = capacidadDeCarga;
        this.carga = [];
        this.posicionActual = [0, 0, 0];
    }
    // Método para viajar a un planeta
    viajar(planeta) {
        const distancia = this.calcularDistancia(this.posicionActual, planeta.coordenadas);
        const combustibleNecesario = distancia * 0.5; // El consumo es 0.5 unidades por cada unidad de distancia
        if (this.combustible >= combustibleNecesario) {
            this.combustible -= combustibleNecesario;
            this.posicionActual = planeta.coordenadas;
            console.log(`Viajaste al planeta ${planeta.nombre}. Combustible restante: ${this.combustible}`);
        }
        else {
            console.log("No tienes suficiente combustible para viajar.");
        }
    }
    // Método para recolectar recursos
    recolectarRecursos(planeta) {
        planeta.recursos.forEach((recurso) => {
            if (this.calcularCargaTotal() + recurso.cantidad <= this.capacidadDeCarga) {
                this.carga.push(recurso);
                console.log(`Recolectaste ${recurso.cantidad} unidades de ${recurso.nombre}`);
            }
            else {
                console.log(`No tienes suficiente espacio para recolectar más ${recurso.nombre}.`);
            }
        });
    }
    // Método para calcular la distancia entre dos puntos en el espacio
    calcularDistancia(coord1, coord2) {
        const [x1, y1, z1] = coord1;
        const [x2, y2, z2] = coord2;
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);
    }
    // Método para calcular el peso total de la carga
    calcularCargaTotal() {
        return this.carga.reduce((total, recurso) => total + recurso.cantidad, 0);
    }
}
// Ejemplo de uso
const planetaMarte = new Planeta("Marte", [100, 200, 300], [
    { nombre: "Oxígeno", cantidad: 50 },
    { nombre: "Minerales", cantidad: 30 },
]);
const miNave = new NaveEspacial(500, 100); // Combustible inicial: 500, Capacidad de carga: 100
miNave.viajar(planetaMarte); // Viajamos a Marte
miNave.recolectarRecursos(planetaMarte); // Recolectamos recursos de Marte
