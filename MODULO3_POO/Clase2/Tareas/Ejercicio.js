"use strict";
// Ejercicio 1: Declarar y usar funciones con tipos
// Consigna: Crea una función llamada multiplicarNumeros que acepte dos
// parámetros, ambos de tipo number, y retorne el producto de ambos números.
// Luego, muestra el resultado en consola llamando a la función.
Object.defineProperty(exports, "__esModule", { value: true });
exports.resultado = void 0;
function multiplicarNumeros(a, b) {
    return a * b;
}
console.log(multiplicarNumeros(3, 4));
// Ejercicio 2: Uso de funciones con parámetros opcionales
// Consigna: Define una función llamada saludar que acepte un parámetro nombre
// de tipo string y otro opcional saludo de tipo string. Si el parámetro saludo no es
// proporcionado, la función debe usar "Hola" por defecto. Retorna el saludo y
// muestra el resultado en la consola.
function saludar(nombre, saludo) {
    if (saludo) {
        return `${saludo}, ${nombre}`;
    }
    return `Hola, ${nombre}`;
}
console.log(saludar("Cielo"));
// Ejercicio 3: Creación y manipulación de objetos
// Consigna: Crea un objeto llamado deportista que tenga las propiedades nombre
// (string), deporte (string), y energia (number). Luego, define una función entrenar
// que acepte el objeto deportista y un número de horas de entrenamiento,
// disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. Al
// final, muestra el estado del deportista en la consola
let deportista = {
    nombre: 'Sergio',
    deporte: 'Soccer',
    energia: 545 // kcal
};
function deporte(deportista, horas) {
    deportista.energia -= horas * 5;
    console.log(`Despues de entrenar ${horas}, el estado del deportista es: `);
    console.log(deportista);
}
deporte(deportista, 4);
// Ejercicio 4: Función que devuelve un objetoConsigna: Crea una función llamada crearLibro que acepte tres parámetros:
// titulo (string), autor (string) y paginas (number). La función debe devolver un
// objeto con esas propiedades. Luego, crea dos libros utilizando la función y
// muestra sus detalles en la consola.
function crearLibro(titulo, autor, paginas) {
    return {
        titulo,
        autor,
        paginas
    };
}
// Ejemplos
const libro1 = crearLibro("Los Juegos del Hambre", "Suzanne Collins", 387);
const libro2 = crearLibro("Erase una vez un corazon roto", "Stephanie Garber", 312);
console.log("Libro 1:", libro1);
console.log("Libro 2:", libro2);
// Ejercicio 5: Función con parámetros rest
// Consigna: Crea una función llamada sumarTodos que acepte una cantidad
// indefinida de números y devuelva su suma. Luego, llama a la función con varios
// números y muestra el resultado en la consola.
function sumarTodos(...numeros) {
    return numeros.reduce((acumulador, actual) => acumulador + actual, 0);
}
exports.resultado = sumarTodos(10, 15, 5, 17);
console.log("La suma total de los numeros ingresados es: ", exports.resultado);
// Ejercicio 6: Tipos de parámetros y funciones que retornan objetos
// Consigna: Crea una función llamada crearPersona que acepte tres parámetros:
// nombre (string), edad (number), y pais (string). La función debe devolver un
// objeto que tenga esas propiedades. Luego, imprime el objeto retornado en la
// consola.
function crearPersona(nombre, edad, pais) {
    return {
        nombre,
        edad,
        pais
    };
}
const persona = crearPersona("Diana", 27, "Mexico");
console.log("Datos de la persona", persona);
// Ejercicio 7: Función que modifica propiedades de un objeto
// Consigna: Crea una función llamada aumentarSalario que acepte un objeto
// empleado con las propiedades nombre (string) y salario (number), y un número
// que represente el porcentaje de aumento. La función debe aumentar el salario
// del empleado y devolver el nuevo salario. Muestra en la consola el resultado.
function aumentarSalario(empleado, porcentaje) {
    const aumento = empleado.salario * (porcentaje / 100);
    empleado.salario += aumento;
    return empleado.salario;
}
// Crear un empleado de ejemplo
const empleado = {
    nombre: "Marcos",
    salario: 3000
};
// Aumentar el salario
const nuevoSalario = aumentarSalario(empleado, 10); // 10% de aumento
console.log(`El nuevo salario de ${empleado.nombre} es: $${nuevoSalario}`);
// Ejercicio 8: Funciones con diferentes tipos de retorno
// Consigna: Crea una función llamada calcularArea que acepte el tipo de figura
// ("circulo" o "rectangulo") y luego acepte los parámetros necesarios para cada
// tipo de figura (radio para el círculo y largo y ancho para el rectángulo). La
// función debe retornar el área de la figura. Usa tipos específicos para cada caso
function calcularArea(tipo, ...parametreos) {
    if (tipo === "circulo") {
        const [radio] = parametreos;
        return Math.PI * radio * radio;
    }
    else if (tipo === "rectangulo") {
        const [largo, ancho] = parametreos;
        return largo * ancho;
    }
    else {
        throw new Error("Tipo de figura no valido");
    }
}
const areaCirculo = calcularArea("circulo", 5);
const areaRectangulo = calcularArea("rectangulo", 10, 4);
console.log(`Área del círculo: ${areaCirculo.toFixed(2)} unidades²`);
console.log(`Área del rectángulo: ${areaRectangulo} unidades²`);
// Crear el objeto coche
let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    encendido: false
};
// Ejercicio 9: Funciones con retorno void y manipulación de objetos
// Consigna: Crea un objeto llamado coche con las propiedades marca, modelo, y
// encendido (booleano). Define una función encenderCoche que acepte el objetocoche y cambie el valor de encendido a true. Muestra el estado del coche en la
// consola antes y después de llamar a la función.
// Función que enciende el coche
function encenderCoche(coche) {
    coche.encendido = true;
}
// Mostrar estado antes
console.log("Antes de encender:", coche);
// Encender el coche
encenderCoche(coche);
// Mostrar estado después
console.log("Después de encender:", coche);
// Ejercicio 10: Funciones y arrays de objetos
// Consigna: Crea una función llamada listarLibros que acepte un array de objetos
// libro, donde cada libro tiene las propiedades titulo (string) y autor (string).
// La función debe recorrer el array y mostrar los detalles de cada libro en la consola.
function listarLibros(libros) {
    libros.forEach(libro => {
        console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}`);
    });
}
// Array de libros
const libros = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { titulo: "1984", autor: "George Orwell" },
    { titulo: "El alquimista", autor: "Paulo Coelho" }
];
// Llamar a la función para listar los libros
listarLibros(libros);
// RESULTADOS
// 12
// Hola, Cielo
// Despues de entrenar 4, el estado del deportista es:
// { nombre: 'Sergio', deporte: 'Soccer', energia: 525 }
// Libro 1: {
//   titulo: 'Los Juegos del Hambre',
//   autor: 'Suzanne Collins',      
//   paginas: 387
// }
// Libro 2: {
//   titulo: 'Erase una vez un corazon roto',
//   autor: 'Stephanie Garber',
//   paginas: 312
// }
// La suma total de los numeros ingresados es:  47
// Datos de la persona { nombre: 'Diana', edad: 27, pais: 'Mexico' }
// El nuevo salario de Marcos es: $3300
// Área del círculo: 78.54 unidades²
// Área del rectángulo: 40 unidades²
// Antes de encender: { marca: 'Toyota', modelo: 'Corolla', encendido: false }
// Después de encender: { marca: 'Toyota', modelo: 'Corolla', encendido: true }
// Título: Cien años de soledad, Autor: Gabriel García Márquez
// Título: 1984, Autor: George Orwell
// Título: El alquimista, Autor: Paulo Coelho
