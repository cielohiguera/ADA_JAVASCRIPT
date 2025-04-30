// Ejercicio 4: Abstracción con Clases Abstractas
// Implementa una clase abstracta DispositivoElectronico con métodos abstractos 
// encender y apagar. Crea dos clases concretas Televisor y Radio, que 
// sobrescriban estos métodos.

// Clase abstracta
abstract class DispositivoElectronico {
    abstract encender(): void;
    abstract apagar(): void;
}

// Clase concreta: Televisor
class Televisor extends DispositivoElectronico {
    public encender(): void {
        console.log("El televisor se ha encendido. Mostrando imagen...");
    }

    public apagar(): void {
        console.log("El televisor se ha apagado.");
    }
}

// Clase concreta: Radio
class Radio extends DispositivoElectronico {
    public encender(): void {
        console.log("La radio está encendida. Reproduciendo música...");
    }

    public apagar(): void {
        console.log("La radio está apagada.");
    }
}

// Pruebas
const miTV = new Televisor();
miTV.encender(); // El televisor se ha encendido...
miTV.apagar();   // El televisor se ha apagado.

const miRadio = new Radio();
miRadio.encender(); // La radio está encendida...
miRadio.apagar();   // La radio está apagada.
