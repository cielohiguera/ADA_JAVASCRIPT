// 9. Ejecución Condicional en Base a Resultados de Promesas
// Imagina que necesitas ejecutar una tarea sólo si otra ha sido exitosa. Crea una
// función tarea1 que simule la realización de una tarea en 2 segundos. Luego,
// escribe otra función tarea2 que dependa de la finalización exitosa de tarea1. Si
// tarea1 se completa, tarea2 debe ejecutarse; de lo contrario, no debe ejecutarse
// nada.
// Este ejercicio muestra cómo encadenar tareas y ejecutar una tarea
// condicionalmente en función del resultado de una promesa

// Función que simula la primera tarea y retorna un mensaje después de 2 segundos
const tarea1 = () => new Promise(resolve => {
    setTimeout(() => resolve("Tarea 1 completada"), 2000);
});

// Función que simula la segunda tarea, también retorna un mensaje
const tarea2 = () => new Promise(resolve => {
    setTimeout(() => resolve("Tarea 2 completada"), 1000);
});

// Función principal que ejecuta tarea2 sólo si tarea1 se completa exitosamente
async function ejecutarCondicional() {
    const resultadoTarea1 = await tarea1(); // Esperamos a que tarea1 se complete
    console.log(resultadoTarea1); // Mostramos el resultado de tarea1

    // Si tarea1 se completa con éxito, ejecutamos tarea2
    if (resultadoTarea1) {
        const resultadoTarea2 = await tarea2();
        console.log(resultadoTarea2); // Mostramos el resultado de tarea2 si fue exitoso
    }
}

ejecutarCondicional(); // Inicia la ejecución condicional