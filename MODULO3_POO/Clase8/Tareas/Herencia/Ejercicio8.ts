// Ejercicio 8: Sistema de Reserva de Hotel
// Consigna: Crea un sistema para gestionar las reservas de un hotel. Define una
// clase base Cliente con propiedades privadas como nombre, numeroHabitacion,
// y un método reservar(). Luego, crea dos clases derivadas ClientePremium y
// ClienteCorporativo que sobrescriban el método reservar() para añadir
// funcionalidades adicionales.
// Adicionalmente, crea una interfaz Beneficios con un método accederBeneficios().
// Ambas clases derivadas deben implementar esta interfaz. En la claseClientePremium, 
// el cliente podrá acceder al spa y desayuno gratis, y en la clase
// ClienteCorporativo, el cliente podrá acceder a salas de reuniones y descuentos.

interface Beneficios {
    accederBeneficios(): void;
}

class Cliente {
    private nombre: string;
    private numeroHabitacion: number;
    constructor(nombre: string, numeroHabitacion: number) {
        this.nombre = nombre,
        this.numeroHabitacion = numeroHabitacion;
    }
    reservar(): void {
        console.log(`${this.nombre} ha reservado la habitación ${this.numeroHabitacion}.`);
    }
    protected getNombre(): string {
        return this.nombre;
    }
    protected getNumeroHabitacion(): number{
        return this.numeroHabitacion;
    }
}

// Cliente Premium
class ClientePremium extends Cliente implements Beneficios {
    reservar(): void {
        console.log(`${this.getNombre()} ha reservado la habitación ${this.getNumeroHabitacion()} como cliente PREMIUM.`);
        this.accederBeneficios();
    }

    accederBeneficios(): void {
        console.log("Beneficios: Acceso al spa y desayuno gratis.");
    }
}

class ClienteCorporativo extends Cliente implements Beneficios {
    reservar(): void {
        console.log(`${this.getNombre()} ha reservado la habitación ${this.getNumeroHabitacion()} como cliente CORPORATIVO.`);
        this.accederBeneficios();
    }

    accederBeneficios(): void {
        console.log("Beneficios: Acceso a salas de reuniones y descuentos especiales.");
    }
}

// Prueba

const cliente1 = new ClientePremium("Ana Gómez", 101);
const cliente2 = new ClienteCorporativo("Empresa XYZ", 202);

cliente1.reservar();
console.log("--------------------------------");
cliente2.reservar();