// Función asincrona

export async function saludo() {
    return "Hola chicas!"
}

// Llamamos a la función y manejamos la promesa con .then
// si "saludo" se resuelve imprime el mensaje en la consola
saludo().then((mensaje) => console.log(mensaje))