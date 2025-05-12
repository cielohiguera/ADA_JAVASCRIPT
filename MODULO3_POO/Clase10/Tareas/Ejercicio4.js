// Ejercicio 4: Promise.race() - Carrera entre Tareas
// Consigna:
// Crea tres promesas que representen tareas con tiempos de ejecución aleatorios.
// Usa Promise.race() para que el programa imprima solo la primera tarea que se
// complete. Luego:
// 1. Asegúrate de que se imprime qué tarea ganó la carrera.
// 2. Controla posibles errores si alguna de las promesas falla

const asignacion1 = new Promise((resolve) => {
    setTimeout(() => resolve("Tarea 1 completada"), Math.random()*5000)
})

const asignacion2 = new Promise((resolve) => {
    setTimeout(() => resolve("Tarea 2 completada"), Math.random()*5000)
})

const asignacion3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Tarea 3 falló"), Math.random()*5000)
})

Promise.race([asignacion1, asignacion2, asignacion3])
    .then((resultado) => {
        console.log(`La tarea ganadora es ${resultado}`);
    })
    .catch((error) => {
        console.error(`La primera tarea falló`);  
    })