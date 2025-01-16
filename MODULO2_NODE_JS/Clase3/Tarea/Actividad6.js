// Actividad 6: Gestión de un diario personal
// Consigna: Crea un programa que te permita gestionar un diario
// personal. El programa debe permitirte:
// 1. Agregar una entrada al diario: Registrar una nueva entrada con
// la fecha y el texto.
// 2. Listar las entradas: Mostrar todas las entradas registradas.
// 3. Eliminar una entrada: Eliminar una entrada específica por su ID.
// Pistas:
// • Usa un archivo JSON para guardar las entradas del diario.
// • Cada entrada tendrá una fecha y un texto.
// • Si el archivo no existe, comienza con un arreglo vacío.

// Paso 1: Importamos

const fs = require('fs')
const filePath = './diario.json'

// Paso 2: Función para leer las entradas

const leerEntradas = () => {
    if(!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]'); // Si no existe creamos un archivo vacio
    };
    const contenido = fs.readFileSync(filePath, 'utf-8') // Leemos el archivo
    return JSON.parse(contenido) 
};

// Paso 3: Funcion para escribir entradas al diario

const escribirTexto = (entradas) => {
    fs.writeFileSync(filePath, JSON.stringify(entradas, null, 2));
}

// Paso 4: Funcion para agregar una nueva entrada

const nuevaEntrada = (texto) => {
    const entradas = leerEntradas();
    const fecha = new Date().toLocaleDateString(); // Obtenemos fecha actual
    entradas.push({id:entradas.length + 1, fecha, texto})
    escribirTexto(entradas)
    console.log(`Entrada agregada: "${texto}"`);
};

// Listar las entradas
const listarEntradas = () => {
    const entradas = leerEntradas(); // Leemos las entradas
    console.log('Entradas del diario:');
    entradas.forEach(entrada => {
        console.log(`${entrada.id}. ${entrada.fecha}: ${entrada.texto}`);
    });
};

// Eliminar una entrada
const eliminarEntrada = (idEntrada) => {
    let entradas = leerEntradas(); // Leemos las entradas
    entradas = entradas.filter(entrada => entrada.id !== idEntrada); // Filtramos para eliminar la entrada por ID
    escribirTexto(entradas); // Guardamos la lista actualizada
    console.log(`Entrada eliminada.`);
};

nuevaEntrada('Hoy aprendí mas acerca NODEJS');
listarEntradas();