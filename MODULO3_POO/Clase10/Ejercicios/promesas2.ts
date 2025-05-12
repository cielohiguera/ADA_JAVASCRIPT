// Promesas de ejemplo
const promesa1 = Promise.resolve(3)
// Crea una promesa que resuelve te devuelve un valor 3

const promesa2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Hola!")
})

const promesa3 = new Promise((resolve, reject) => {
    // Crea otra promesa que se resuelve después de 500 ms
    setTimeout(resolve, 500, "¡Chicas!")
})

// Usamos el promise.all para esperar que todas las promesas se resuelvan
Promise.all([promesa1, promesa2, promesa3])
    .then((resultados) => {
        console.log(`Resultados de todas las promesas: `, resultados);
    })
    .catch((error) => {
        console.error("Una de las promesas fue rechazada: ", error)
    })