// Actividad 8: Seguimiento de proyectos
// Consigna: Crea un programa para gestionar proyectos. El programa debe
// permitirte:
// 1. Agregar un proyecto: Registrar un proyecto con su nombre y
// estado (pendiente o en progreso).
// 2. Listar los proyectos: Mostrar todos los proyectos registrados.
// 3. Actualizar el estado de un proyecto: Cambiar el estado de un
// proyecto a "finalizado" o "en progreso".
// Pistas:
// • Usa un archivo JSON para guardar los proyectos.
// • Si el archivo no existe, comienza con un arreglo vacío.
// • Cada proyecto debe tener un ID único.

// Paso 1: Importamos

const fs = require('fs')
const filePath = './proyectos.json'

// Paso 2: Leer el archivo desde el archivo

const leerProyectos = () => {
    if(!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8') // Leemos el archivo
    return JSON.parse(contenido);
}

// Paso 3: Funcion para escribir los proyectos

const escribirProyectos = (gestionProyectos) => {
    fs.writeFileSync(filePath, JSON.stringify(gestionProyectos, null, 2));
};

// Paso 4: Función para escribir una nueva tarea diaria
const agregarProyecto = (descripcion, estado) => {
    const gestion = leerProyectos();
    gestion.push({id: gestion.length + 1, descripcion, estado})
    escribirProyectos(gestion);
    console.log(`Proyecto agregado "${descripcion}"`);
};

// Paso 5: Listar proyectos

const listarProyectos = () => {
    const proyecto = leerProyectos();
    console.log('Lista de proyectos');
    proyecto.forEach(project => {
        console.log(`${project.descripcion} - Estado: ${project.estado}`);
    });
};

// Paso 6: Actualizar estado de proyecto

const actualizarProyecto = (idProyecto, nuevoEstado) => {
    const proyectos = leerProyectos();
    const proyecto = proyectos.find(p => p.id === idProyecto);
    if (proyecto) {
        proyecto.estado = nuevoEstado;
        escribirProyectos(proyectos)
        console.log(`Proyecto actualizado: ${proyecto.descripcion}, nuevo estado ${proyecto.estado}`);
    } else {
        console.log('Proyecto no encontrado');
    };
};

// Ejemplo de uso de las funciones
// agregarProyecto('Desarrollo Web', 'En progreso');
// listarProyectos();
actualizarProyecto(1, 'Terminado')
listarProyectos();