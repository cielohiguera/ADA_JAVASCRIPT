// Función que simulan tareas
function tareasAsincrona1() {
    return new Promise(resolve => 
        setTimeout(() => resolve("Tarea 1 completada"), 2000))
}

function tareasAsincrona2() {
    return new Promise(resolve => 
        setTimeout(() => resolve("Tarea 2 completada"), 2000))
}

function tareasAsincrona3() {
    return new Promise(resolve => 
        setTimeout(() => resolve("Tarea 3 completada"), 1000))
}

// Función principal para ejecutar las tareas
async function ejecutarTareas() {
    try {
        // Llamamos a las tareas sin await, asi se ecutan en paralelo
        const promesa1 = tareasAsincrona1()
        const promesa2 = tareasAsincrona2()
        const promesa3 = tareasAsincrona3()

        const resultados = await Promise.all([promesa1, promesa2, promesa3])
        console.log("Resultados: ", resultados);
    } catch (error) {
        console.error("Error en alguna de las tareas: ", error)
    }
}

ejecutarTareas()