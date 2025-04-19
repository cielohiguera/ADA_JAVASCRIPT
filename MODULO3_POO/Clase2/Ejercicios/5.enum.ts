// 1. Definición de un enum numerico

enum colores {
    Rojo,
    Verde,
    Azul,
}

// Acceder a los valores enum
let coloresFavoritos: colores = colores.Verde;
console.log('Color favorito (por numero): ', coloresFavoritos)

console.log('Nombre del color por indice: ', colores[coloresFavoritos])

// Color favorito (por numero):  1
// Nombre del color por indice:  Verde

// 2. Definciión de enum de cadenas

enum Direcciones {
    Norte = 'N',
    Sur = 'S',
    Este = 'E',
    Oeste = 'O'
}

// Asignar un valor del enum a una variable
let direccionViaje: Direcciones = Direcciones.Norte
console.log('Direcciones del viaje: ', direccionViaje);
// Direcciones del viaje:  N