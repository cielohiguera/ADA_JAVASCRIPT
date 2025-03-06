const readFileSync = require('readline-sync');
const { readTasks } = require('../models/taskModel');

// Función para mostrar todas las tareas
function displayTask() {
    if (readTasks.length === 0) {
        console.log('No hay tareas');
    } else {
        console.log('Tareas:');
        readTasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.description} - ${task.completed ? 'Completada' : 'Pendiente'}`);
        });
    }
}


// Función para pedir al usuario la descripción de la tarea nueva
function promptForTask() {
    return readFileSync.question('Ingrese el numero de la tarea a agregar: ')
}

// Función para eliminar un usuario por id de una tarea a eliminar 
function promptForTaskId() {
    const taskId = readFileSync.question('Ingrese el numero de la tarea a eliminar: ') -1
    if (taskId < 0 || taskId >= readTasks.length) {
        console.log('Tarea no valida');
        return -1;
    }
}

// Función para mostrar un mensaje de confirmación

function confirmationMessage(message) {
    console.log(message)
}

// Hacemos la exportación

module.exports = {displayTask, promptForTask, promptForTaskId, confirmationMessage}