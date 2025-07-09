"use strict";
const miPromesa = new Promise((resolve, reject) => {
    console.log("Estado: Pending. La operación ha comenzado...");
    // Simulando una operación asincrona
    setTimeout(() => {
        // Genera un valor booleano aleatorio: true = exito / false: fallo
        const exito = Math.random() > 0.5;
        if (exito) {
            resolve("Operación completada con éxito");
        }
        else {
            reject("La operación fallo");
        }
    }, 2000);
});
// Manejo de promesas
miPromesa
    .then((resultado) => {
    console.log("Exito: ", resultado);
})
    .catch((error) => {
    console.log("Error: ", error);
})
    .finally(() => {
    console.log("Promesa finalizada");
});
console.log("Promesa creada, esperando resultado");
