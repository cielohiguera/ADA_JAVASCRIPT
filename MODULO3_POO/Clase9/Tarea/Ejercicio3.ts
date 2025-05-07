// 3. Compañía de Seguros: Renovación Automática de Pólizas
// Desarrolla un sistema que gestione las pólizas de seguros de una compañía.
// Cada póliza debe tener un identificador, nombre del cliente, monto asegurado y
// una fecha de renovación. Implementa las siguientes funciones:
// • Añadir una póliza.
// • Programar la renovación de la póliza utilizando setTimeout().
// • Mostrar todas las pólizas activas.

// Definimos la tupla para la poliza
type Poliza = [number, string, number, Date]; // [id, nombreCliente, montoAsegurado, fecha de renovación]

// Creamos una lista de polizas
let polizas: Poliza[] = []

// Función para añadir una nueva poliza
function agregarPoliza(id: number, nombreCliente: string, montoAsegurado: number, fechaRenovacion: Date) {
    const nuevaPoliza: Poliza = [id, nombreCliente, montoAsegurado, fechaRenovacion];
    polizas.push(nuevaPoliza)
    console.log(`Poliza añadida para ${nombreCliente}`);
}

// Funcion para renovación de poliza
function renovarPoliza(indice: number) {
    setTimeout(() => {
        if (polizas[indice]) {
            const fechaActualizada = new Date(polizas[indice][3]);
            fechaActualizada.setFullYear(fechaActualizada.getFullYear() + 1) // Renovar por año
            polizas[indice][3] = fechaActualizada;
            console.log(`La póliza de ${polizas[indice][1]} ha sido renovada. Nueva fecha de renovación: ${fechaActualizada}`);
        } else {
            console.log(`Poliza no encontrada`);
        }
    }, 10000)
}

// Función para mostrar todas las pólizas activas
function mostrarPolizas() {
    console.log("Pólizas activas:");
    polizas.forEach(poliza => {
        console.log(`ID: ${poliza[0]}, Cliente: ${poliza[1]}, Monto Asegurado: $${poliza[2]}, Fecha de Renovación: ${poliza[3]}`);
    });
}

// Añadimos algunas pólizas
agregarPoliza(1, "Carlos", 50000, new Date(2024, 0, 1));
agregarPoliza(2, "Laura", 75000, new Date(2024, 0, 15));

// Mostramos las pólizas
mostrarPolizas();

// Programamos la renovación de la primera póliza
renovarPoliza(0);