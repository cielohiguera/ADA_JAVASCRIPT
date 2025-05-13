// 5. Actualización Concurrente de Datos de Usuario y Pedidos
// En un sistema de e-commerce, las actualizaciones de datos de usuario y pedidos
// suelen ejecutarse de manera concurrente para mayor eficiencia. Escribe dos
// funciones asíncronas, una que actualice los datos del usuario y otra que
// actualice los pedidos, ambas con un tiempo de espera de 1.5 segundos. Usa
// Promise.all para ejecutar ambas funciones en paralelo y luego muestra un
// mensaje cuando ambas actualizaciones se hayan completado

// Función que simula la actualización de datos de usuario
const actualizarUser = () => new Promise(resolve => setTimeout(() => resolve("Usuario actualizado"), 1500));

// Función que simula la actualización de pedidos
const actulizarPedidos = () => new Promise(resolve => setTimeout(() => resolve("Pedidos actualizados"), 1500))

// Función que ejecuta mas actualizaciones en paralelo

async function actualizarTodo() {
    // Se ejecutan promesas en paralelo para optimizar tiempo de espera
    const [resultadoUsuario, resultadoPedidos] = await Promise.all([actualizarUser(), actualizarUser()])
    console.log(resultadoUsuario, resultadoPedidos); // Mostramos ambas actualizaciones
}

actualizarTodo();