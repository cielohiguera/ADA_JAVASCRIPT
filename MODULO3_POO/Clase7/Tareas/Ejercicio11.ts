// Interfaz Empleado
interface Empleado {
    trabajar(): void;
}

// Clase Programador
class Programador implements Empleado {
    trabajar(): void {
        console.log("El programador está escribiendo código en TypeScript.");
    }
}

// Clase Disenador
class Disenador implements Empleado {
    trabajar(): void {
        console.log("El diseñador está creando prototipos en Figma.");
    }
}

// Función que utiliza polimorfismo
function iniciarTrabajo(empleado: Empleado): void {
    empleado.trabajar();
}

// Pruebas
const empleado1 = new Programador();
const empleado2 = new Disenador();

iniciarTrabajo(empleado1); // El programador está escribiendo código...
iniciarTrabajo(empleado2); // El diseñador está creando prototipos...
