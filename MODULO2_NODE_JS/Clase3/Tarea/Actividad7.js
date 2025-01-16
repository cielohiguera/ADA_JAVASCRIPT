// Actividad 7: Control de tareas diarias
// Consigna: Crea un programa para gestionar tus tareas diarias. El
// programa debe permitirte:
// 1. Agregar una tarea diaria: Registrar una nueva tarea con su
// descripción y estado.
// 2. Listar las tareas diarias: Mostrar todas las tareas con su estado.
// 3. Marcar una tarea como completada: Cambiar el estado de una
// tarea de "pendiente" a "completada".
// Pistas:
// • Usa un archivo JSON para guardar las tareas.• El estado de cada tarea puede ser "pendiente" o "completada".
// • Si el archivo no existe, comienza con un arreglo vacío.

// Paso 1: Importamos

const fs = require('fs')
const filePath = './tareasDiarias.json'

// Paso 2: Leer las tareas desde el archivo

const leerTareas = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8') // Leemos el archivo
    return JSON.parse(contenido) // Convertimos a todo un arreglo de tareas diarias
}

// Paso 3: Funcion en el que se escriban las tareas diarias

const escribirTareas = (tareasDiarias) => {
    fs.writeFileSync(filePath, JSON.stringify(tareasDiarias, null, 2));
};

// Paso 4: Funcion para escribir una nueva tarea diaria

const agregarTarea = (descripcion) => {
    const tareas = leerTareas();
    tareas.push({id: tareas.length + 1, descripcion, estado: 'pendiente'}); // Añadimos la nueva tarea con el estado de pendiente
    escribirTareas(tareas);
    console.log(`Tarea agregada: "${descripcion}"`);
};

// Paso 5: Listar tareas

const listarTareasDiarias = () => {
    const tareas = leerTareas();
    console.log('Lista de tareas diarias:');
    tareas.forEach(tarea => {
        console.log(`${tarea.descripcion}. ${tarea.descripcion} - Estado: ${tarea.estado}`);
    });
};

// Paso 6: Marcar una tarea como completada

const completarTarea = (idTarea) => {
    const tareas = leerTareas();
    const tarea = tareas.find(t => t.id === idTarea);
    if (tarea) {
        tarea.estado = 'completada';
        escribirTareas(tareas);
        console.log(`Tarea completada: "${tarea.descripcion}"`);
    } else {
        console.log(`Tarea no encontrada`);
    };
};

// Ejemplo de uso

// agregarTarea('Estudiar sistemas distribuidos');
// listarTareasDiarias();
completarTarea(1);
