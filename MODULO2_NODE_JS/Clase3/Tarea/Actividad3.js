// Actividad 3: Registro de tareas pendientes
// Consigna: Crea un programa para gestionar tus tareas pendientes. El
// programa debe permitirte:
// 1. Agregar una tarea: Registrar una tarea pendiente con su
// descripción.
// 2. Listar las tareas: Mostrar todas las tareas registradas.
// 3. Eliminar una tarea: Eliminar una tarea de la lista.
// Pistas:
// • Usa un archivo JSON para guardar las tareas.
// • Si el archivo no existe, comienza con un arreglo vacío.
// • Eliminar una tarea se puede hacer por su ID.

// Paso 1: Importamos

const fs = require('fs')
const filePath = './tareas.json'

// Paso 2: Función para leer las tareas

const leerTareas = () => {
    // Si el archivo no existe, creamos un archivo vacío
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8') // Leemos el archivo
    return JSON.parse(contenido) // Convertimos el contenido en un arreglo de tareas
}

// Paso 3: Función para escribir las tareas en el archivo

const escribirTareas = (tareas) => {
    fs.writeFileSync(filePath, JSON.stringify(tareas, null, 2)) // Escribimos las tareas en el archivo
}


// Paso 4: Funcion para agregar nueva tarea

const nuevaTarea = (tarea) => {
    const tareas = leerTareas() // Leer las tareas existentes
    tareas.push({id: tareas.length + 1, tarea : tarea}); // Agregamos la nueva serie
    escribirTareas(tareas) //Guardamos la lista actualizada
    console.log(`Tarea agregada: ${tarea}`);
}

// Paso 5: Funcion para listar las tareas

const listarTareas = () => {
    const tareas = leerTareas();
    console.log('Lista de tareas pendientes');
    tareas.forEach(tarea => {
        console.log(`${tarea.id}. ${tarea.tarea}`);
    });
}

// Paso 6: Funcion para eliminar una tarea

const eliminarTarea = (idTarea) => {
    let tareas = leerTareas(); //Leemos las tareas
    tareas = tareas.filter(tarea => tarea.id != idTarea); // Filtramos para eliminar la tarea por ID
    escribirTareas(tareas); // Guardamos la lista actualizada
    console.log('Tarea eliminada.');
}

// Ejemplo de uso

nuevaTarea("Comprar un teclado")
listarTareas();
eliminarTarea(1);