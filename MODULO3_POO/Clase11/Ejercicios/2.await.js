// Proceso que simula un proceso asincrono que tarda 2 segundos
function procesoLargo() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Proceso completado"), 2000)
    })
}

// Función principal que se usará await para esperar el resultado de procesoLargo
async function ejecutarProceso() {
    console.log("Iniciando proceso...");
    // Pausa la ejecución de proceso largo que se resuelve después de 2 segundos
    const resultado = await procesoLargo()
    console.log(resultado); // Muestra el proceso completado
    console.log("Proceso terminado");
}

ejecutarProceso();