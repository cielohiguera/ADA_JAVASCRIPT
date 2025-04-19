// 1. Función básica
function suma(a: number, b: number): number {
    return a + b
}
console.log(suma(3,4))

let resultadoSuma = suma(3,4)
console.log(resultadoSuma);

// Función que muestra un mensaje sin retorno
function mostrarMensaje(mensaje:string): void {
    console.log(mensaje)
}
console.log(mostrarMensaje("Hola"))

// 3. Función con parametro opcional
export 
function saludar(nombre:string, saludo?: string): string {
    if (saludo) {
        return `${saludo}, ${nombre}`
    }
    return `Hola, ${nombre}`
}

console.log(saludar("Cielo"))