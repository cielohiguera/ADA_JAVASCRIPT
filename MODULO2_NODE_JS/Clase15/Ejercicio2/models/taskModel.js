// Importamos 
const fs = require('fs');
const filePath = '../Ejercicio2/data/tasks.json'

// función para leer las tareas
function readTasks() {
    const data = fs.readFileSync(filePath) // leemos el archivo de forma sincronica
    return JSON.parse(data) // Convertimos el contenido del archivo a un objeto js
}

// funcion para guardar las tareas en el archivo JSON
function saveTask(tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2)) // Convertimos las tareas a json y las escribimos en el archivo

}

module.exports = {readTasks, saveTask}