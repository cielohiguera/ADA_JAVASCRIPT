export const promesa1 = new Promise((resolve) => {
    setTimeout(resolve, 100, "Promesa 1 completada")
})

const promesa2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Promesa 2 completada")
})


Promise.any([promesa1, promesa2])
    .then((resultado) => {
        console.log("Resultado de la promesa ganadora: ", resultado);
    })