// Simulador de una cola de atención al cliente
// Simula una cola de atención al cliente donde los clientes llegan y son
// atendidos uno por uno. Tienes una lista inicial de clientes en espera y un
// bucle que los atiende de a uno. Realiza lo siguiente:
// 1. Mientras haya clientes en la cola, atiende a cada uno y muéstralo
// por consola.
// 2. Si el nombre del cliente es "VIP", muéstralo con prioridad indicando
// un mensaje especial.
// 3. Al final, muestra cuántos clientes fueron atendidos en total.
// Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"].

// Lista inicial de clientes en espera
const clientes = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];

// Variable para contar el número de clientes atendidos
let contadorClientes = 0;

// Función para atender a los clientes
function atenderClientes(cola) {
  while (cola.length > 0) {
    const cliente = cola.shift(); // Atiende al primer cliente de la cola
    // Mensaje especial si el cliente es VIP
    if (cliente === "VIP") {
      console.log(`Atendiendo a ${cliente} con prioridad especial!`);
    } else {
      console.log(`Atendiendo a ${cliente}`);
    }

    contadorClientes++;
  }
}

atenderClientes(clientes);

// Mostrar el total de clientes atendidos
console.log(`Total de clientes atendidos: ${contadorClientes}`);