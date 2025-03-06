// Importamos el modulo y la vista

const taskModel = require('../models/taskModel');
const taskView = require('../views/taskView');

// Función para mostrar tareas
function showTasks() {
    const tasks = taskModel.readTasks() // Leemos la tarea desde el modelo
    taskView.displayTask(tasks) // mostramos las tareas usando la vista
}

// función para agregar una tarea
function addTask() {
    const taskDescription = taskView.promptForTask() // pedimos al usuario que ingrese la descripcion de la tarea
    const tasks = taskModel.readTasks() // leemos las tareas actuales
    tasks.push({description: taskDescription, completed: false}) // agregamos la nueva tarea a la lista
    taskModel.saveTask(tasks) // Guardamos las tareas actualizadas en el json
    taskView.confirmationMessage('Tarea agregada') // Mostramos un mensaje de confirmación
}

// Función para eliminar una tarea
function removeTask() {
    const tasks = taskModel.readTasks() // Leemos las tareas
    if (tasks.length === 0) {
        taskView.addTask('No hay tareas para eliminar')
        return;
    }
    const taskId = taskView.promptForTaskId(tasks) //pedimos al usuario que elija una tarea para eliminar
    tasks.splice(taskId, 1) // Eliminamos la tarea seleccionada
    taskModel.saveTask(tasks) // Guardamos las tareas en el json
    taskView.confirmationMessage('Tarea eliminada') // Mostramos un mensaje de confirmación
}

// funcion para eliminar una tarea

// exportacion de las funciones
module.exports = {showTasks, addTask, removeTask}