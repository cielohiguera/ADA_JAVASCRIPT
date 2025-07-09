"use strict";
// . Redes Sociales: Notificaciones de AmigosImplementa un sistema de gestión de amigos en una red social. Cada amigo
// debe tener un nombre y un estado (en línea o fuera de línea). Utiliza un
// setInterval() para verificar el estado de los amigos cada 5 segundos y enviar una
// notificación si un amigo se pone en línea
// Lista de amigos
const amigos = [];
// Funcion para añadir un nuevo amigo
function agregarAmigo(nombre, enLinea) {
    const nuevoAmigo = [nombre, enLinea];
    amigos.push(nuevoAmigo);
    console.log(`Amigo ${nombre} añadido con éxito`);
}
;
// Funcion para mostrar amigos
function mostrarAmigos() {
    console.log("Lista de amigos");
    amigos.forEach(amigo => {
        const [nombre, enLinea] = amigo;
        console.log(`${amigo[0]} - Estado: ${amigo[1] ? "En línea" : "Fuera de línea"}`);
    });
} // Función para verificar el estado de los amigos
function verificarEstado() {
    setInterval(() => {
        amigos.forEach(amigo => {
            if (!amigo[1]) {
                amigo[1] = Math.random() < 0.5; // Cambiar aleatoriamente el estado
                if (amigo[1]) {
                    console.log(`Notificación: ${amigo[0]} se ha puesto en línea.`);
                }
            }
        });
    }, 5000); // Cada 5 segundos
}
// Añadimos algunos amigos
agregarAmigo("Mario", false);
agregarAmigo("Ana", true);
// Mostramos los amigos
mostrarAmigos();
// Iniciamos la verificación del estado de los amigos
verificarEstado();
