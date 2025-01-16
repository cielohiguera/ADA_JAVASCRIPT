// Actividad 9: Registro de eventos
// Consigna: Crea un programa para registrar eventos. El programa debe
// permitirte:
// 1. Agregar un evento: Registrar un evento con nombre, fecha y
// lugar.
// 2. Listar los eventos: Mostrar todos los eventos registrados.
// 3. Eliminar un evento: Eliminar un evento de la lista.
// Pistas:
// • Usa un archivo JSON para guardar los eventos.
// • Si el archivo no existe, comienza con un arreglo vacío.
// • Cada evento debe tener un ID único.

// Paso 1: Importamos

const fs = require('fs')
const filePath = './eventos.json'

// Paso 2: Funcion para leer los eventos
const leerRegistro = () => {
    if(!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(contenido)
}

// Paso 3: Funcion para escribir los eventos en el archivo

const escribirEventos = (eventos) => {
    fs.writeFileSync(filePath, JSON.stringify(eventos, null, 2))
}

// Paso 4: Agregar evento

const agregarEvento = (nombre, fecha, lugar) => {
    const eventos = leerRegistro();
    eventos.push({id: eventos.length + 1, nombre, fecha, lugar});
    escribirEventos(eventos);
    console.log(`Evento agregado: ${nombre}, fecha: ${fecha}, lugar: ${lugar}`);
};

// Paso 5: Lista de eventos

const listarEventos = () => {
    const eventos = leerRegistro(); // Leemos los eventos
    console.log('Lista de eventos:');
    eventos.forEach(evento => {
        console.log(`${evento.id}. ${evento.nombre} - Fecha: ${evento.fecha}, Lugar: ${evento.lugar}`);
    });
};

// Eliminar un evento
const eliminarEvento = (idEvento) => {
    let eventos = leerRegistro(); // Leemos los eventos
    eventos = eventos.filter(evento => evento.id !== idEvento); // Filtramos para eliminar el evento por ID
    escribirEventos(eventos); // Guardamos la lista actualizada
    console.log('Evento eliminado.');
};

// Ejemplo de uso de las funciones
agregarEvento('Concierto de Paramore', '2025-04-17', 'San Diego Stadium');
listarEventos();