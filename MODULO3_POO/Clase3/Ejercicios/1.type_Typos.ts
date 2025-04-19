// 1. Alias de ti´po primitivo
// Alias para tipos básicos oprimitivos como number, string y boolean
type ID = number // alias para numeros (id representa un número)
type nombre = string // alias cadenas 
type activo = boolean // alias para booleano

// Usando los alias para declarar variables
let usuarioID: ID = 123; // Variable de tipo id (number)
let nombreUsuario: nombre = "Lucia"
let cuentaActuvia: activo = true; 

console.log(`Usuario: ${nombreUsuario}, Id: ${usuarioID}, activa: ${cuentaActuvia}`);

// 2. Alias para objetos 
// Alias para definir un objeto complejo
// en ese caso una dirección que contiene tres propiedades

type direccion = {
    calle: string;
    ciudad: string;
    codigoPostal: number;
}

// Usamos el alias dirección para crear un objeto con las propiedades especificadas
let miDirreccion: direccion = {
    calle: "Avenida Castillo",
    ciudad: "Buenos Aires",
    codigoPostal: 6029
};

console.log(`Vivo en ${miDirreccion.calle}, ${miDirreccion.ciudad}, ${miDirreccion.codigoPostal}`);


// 3. Alias para uniones de tipos
// Donde una variable puede tener uno o varios tipos posibles
type Resultado = 'exito' | 'error' // resultado solo puede ser exito o error
type IdUsario = string | number

// Usamos el alias resultado y idUsuario para definir las variables
let estadoOperaciones : Resultado = "exito"
let idUsuario1: IdUsario = 4356
let idUsuario2: IdUsario = "Berni"

console.log(`Estado de operación: ${estadoOperaciones}, Id Usuario 1: ${idUsuario1}`)

// 4. Alias para funciones
// Toma como argumento dos numeros y devuelve un numero
// esto se usa para definir la "firma" de funciones que deben cumplir con cierto formato

type operacionesMatematicas = (a: number, b: number) => number

// Implementación de dos funciones que siguen el formato de operacionesMatematicas
const sumar: operacionesMatematicas = (a, b) => a + b;
const restar: operacionesMatematicas = (a, b) => a - b;

console.log(`La suma de los numeros ingresados en la consola son`, sumar(5,7));
console.log(`La suma de los numeros ingresados en la consola son`, restar(8,5));

// 5. Alias para arrays
// puede ser array de numeros o cadenas
type ListaNumeros = number[];
type ListaCadenas = string[];
//usamos los alias para crear arrays 
let numeros : ListaNumeros = [1,2,3,5,6]
let cadenas : ListaCadenas = ["Perro", "Gato", "Hamster"]
console.log(`Numeros ${numeros.join(", ")}`);
console.log(`Numeros ${cadenas.join(", ")}`);



// resultados
// Usuario: Lucia, Id: 123, activa: true
// Vivo en Avenida Castillo, Buenos Aires, 6029
// Estado de operación: exito, Id Usuario 1: 4356
// La suma de los numeros ingresados en la consola son 12
// La suma de los numeros ingresados en la consola son 3
// Numeros 1, 2, 3, 5, 6
// Numeros Perro, Gato, Hamster