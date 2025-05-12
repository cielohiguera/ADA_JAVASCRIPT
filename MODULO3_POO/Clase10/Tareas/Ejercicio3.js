// Ejercicio 3: Métodos Estáticos - Gestionar múltiples tareas con Promise.all()Consigna:
// Simula la consulta a tres APIs diferentes que devuelven información sobre
// usuarios, productos y ventas. Cada consulta debe realizarse usando una función
// que retorne una promesa. Usa Promise.all() para esperar a que todas las
// consultas se completen y luego:
// 1. Imprime un mensaje con los resultados si todas las consultas fueron
// exitosas.
// 2. Si alguna falla, imprime un mensaje de error.
// 3. Usa un retraso distinto para cada promesa (por ejemplo, 2, 3 y 4
// segundos).
// Opcional: Modifica el comportamiento para que si alguna consulta falla, se
// devuelva el mensaje: "No se pudo completar la operación: [API que falló]".

function consultaApi(api, tiempo) {
    return new Promise((resolve, reject) => {
        console.log(`Consultando ${api}.. `);

        setTimeout(() => {
            const exito = Math.random() > 0.5;

            if (exito) {
                resolve(`${api} responde con éxito`)
            } else {
                reject(`Existe un error en la ${api}`)
            }
        }, tiempo)
    });
}

// Creación de api's
const api1 = consultaApi("API Usuario", 2000)
const api2 = consultaApi("API Productos", 3000)
const api3 = consultaApi("API Ventas", 4000)

Promise.all([api1, api2, api3])
    .then((resultados) => {
        console.log(`Resultado de todas las promesas: `, resultados);
    })
    .catch((error) => {
        console.error("Una de las promesas fue rechazada: ", error);
    })