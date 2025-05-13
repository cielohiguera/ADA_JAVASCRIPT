// 1. Simulación de Tiempo de Respuesta de un Servidor
// Imagina que quieres simular cómo responde un servidor cuando un cliente
// realiza una petición. Para este ejercicio, el servidor tiene un tiempo de respuesta
// variable (aleatorio) entre 1 y 3 segundos. Debes escribir una función llamada
// simulacionServidor que simule este comportamiento utilizando async y await.
// La función deberá:
// • Tener un retardo de tiempo aleatorio.
// • Retornar el mensaje "Servidor listo" una vez que haya transcurrido el
// tiempo.
// Este ejercicio te ayudará a entender cómo gestionar el tiempo en procesos
// asíncronos, fundamental cuando trabajamos con peticiones de red en el
// desarrollo web

// Se crea una función de retardo que devuelve una promesa que se resuelve
// después de un tiempo aleatorio.

const retardo = () => new Promise(resolve => {
    // Tiempo aleatorio entre 1 y 3 segundos
    const tiempoAleatorio = Math.random() * 2000 + 1000
    setTimeout(resolve, tiempoAleatorio); // Se espera a que ese tiempo se termine para devolver una promesa
});

// Función asincrónica simulacionServidor
async function simulacionServidor() {
    await retardo() // Pausamos la ejecución hasta que el retardo aleatorio se accomplete
    return "Servidor listo";
}

// Se llama a la función y se espera a que se resuelva.
simulacionServidor().then(console.log);