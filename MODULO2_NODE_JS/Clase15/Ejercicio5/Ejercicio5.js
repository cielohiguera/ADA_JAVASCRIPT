// Ejercicio 5: Aplicación de Notas con Módulo Path y FS
// Consigna:
// Crea una aplicación de notas donde cada nota se guarde en un archivo
// de texto dentro de una carpeta específica. Usa el módulo path para
// manejar rutas y fs para crear y leer archivos.
// Pasos:
// • Usa path.join para crear rutas dinámicas a la carpeta de notas.
// • Usa fs para crear, leer y eliminar archivos de notas.
// • Implementa un menú interactivo con readline-sync.

const fs = require('fs');
const path = require('path');
const readline = require('readline-sync');

// Carpeta donde se guardarán las notas
const notasDir = path.join(__dirname, 'notas');

// Verificar si la carpeta de notas existe, si no, crearla
if (!fs.existsSync(notasDir)) {
    fs.mkdirSync(notasDir);
}

// Función para crear una nueva nota
function crearNota() {
    const titulo = readline.question('Ingrese el titulo de la nota: ').trim();
    if (!titulo) {
        console.log('El título no puede estar vacío.');
        return;
    }
    
    const contenido = readline.question('Ingrese el contenido de la nota: ');
    const rutaNota = path.join(notasDir, `${titulo}.txt`);
    
    fs.writeFileSync(rutaNota, contenido, 'utf-8');
    console.log(`Nota "${titulo}" creada exitosamente.`);
}

// Función para leer una nota
function leerNota() {
    const titulo = readline.question('Ingrese el titulo de la nota a leer: ').trim();
    const rutaNota = path.join(notasDir, `${titulo}.txt`);
    
    if (fs.existsSync(rutaNota)) {
        const contenido = fs.readFileSync(rutaNota, 'utf-8');
        console.log(`Contenido de "${titulo}":\n${contenido}`);
    } else {
        console.log(`La nota "${titulo}" no existe.`);
    }
}

// Función para listar todas las notas
function listarNotas() {
    const archivos = fs.readdirSync(notasDir);
    if (archivos.length === 0) {
        console.log('No hay notas guardadas.');
    } else {
        console.log('Notas guardadas:');
        archivos.forEach((archivo, index) => {
            console.log(`${index + 1}. ${path.basename(archivo, '.txt')}`);
        });
    }
}

// Función para eliminar una nota
function eliminarNota() {
    const titulo = readline.question('Ingrese el titulo de la nota a eliminar: ').trim();
    const rutaNota = path.join(notasDir, `${titulo}.txt`);

    if (fs.existsSync(rutaNota)) {
        fs.unlinkSync(rutaNota);
        console.log(`Nota "${titulo}" eliminada exitosamente.`);
    } else {
        console.log(`La nota "${titulo}" no existe.`);
    }
}

// Menú interactivo
function menu() {
    while (true) {
        console.log('\nAplicación de Notas ');
        console.log('1️. Crear una nota');
        console.log('2. Leer una nota');
        console.log('3️. Listar todas las notas');
        console.log('4️. Eliminar una nota');
        console.log('5️. Salir');

        const opcion = readline.question('Seleccione una opcion: ').trim();

        switch (opcion) {
            case '1':
                crearNota();
                break;
            case '2':
                leerNota();
                break;
            case '3':
                listarNotas();
                break;
            case '4':
                eliminarNota();
                break;
            case '5':
                console.log('Saliendo de la aplicacion...');
                return;
            default:
                console.log('Opción inválida, intenta de nuevo.');
        }
    }
}

// Ejecutar el menú
menu();
