// 4. Simulación de Proceso de Pago Asíncrono con Manejo de Errores
// Diseña una función que simule un proceso de pago que tarda 3 segundos en
// completarse. Si el monto del pago es superior a $1000, el proceso debe fallar y
// lanzar un error. Utiliza try/catch para manejar el error de manera adecuada.
// Esta simulación es relevante para entender cómo gestionar errores en procesos
// financieros o de pago, en los cuales las validaciones son cruciales

const procesarPago = async (monto) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (monto > 1000) { // Si el monto es mayor de $1000 deberá marcar error
                reject("Error: el monto supera el monto del limite")
            } else { // Si el monto no es válido completamos el pago
                resolve ("Pago realizado");
            }
        }, 3000) // Simulamos retardo de 3 segundos
    });
};

// Función principal para ejecutar pago y manejar errores

async function ejecutarPago(monto) {
    try {
        const resultado = await procesarPago(monto); // Procesar pago
        console.log(resultado);
    } catch (error) {
        console.error("Error en el pago: ", error);
    }
}

ejecutarPago(500)