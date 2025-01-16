// Actividad 5: Registro de contactos
// Consigna: Crea un programa que permita registrar contactos con
// nombre, teléfono y correo electrónico. El programa debe permitirte:
// 1. Agregar un contacto: Registrar un nuevo contacto.
// 2. Listar los contactos: Mostrar todos los contactos registrados.
// 3. Eliminar un contacto: Eliminar un contacto de la lista.
// Pistas:
// • Usa un archivo JSON para guardar los contactos.
// • Si el archivo no existe, comienza con un arreglo vacío.

// Paso 1: Importamos
const fs = require('fs')
const filePath = './contactos.json'

// Paso 2: Funcion para leer los contactos
const leerContactos = () => {
    // Si el archivo no existe, creamos un archivo vacío
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8') // Leemos el archivo
    return JSON.parse(contenido) // Convertimos el contenido en un arreglo de contactos
}

// Paso 3: Funcion para escribir los contactos en el archivo

const escribirContactos = (contactos) => {
    fs.writeFileSync(filePath, JSON.stringify(contactos, null, 2)) // escribimos los contactos en el archivo
}

// Agregar un contacto
const agregarContacto = (nombre, telefono, correo) => {
    const contactos = leerContactos(); // Leemos los contactos existentes
    contactos.push({ id: contactos.length + 1, nombre, telefono, correo }); // Agregamos el nuevo contacto
    escribirContactos(contactos); // Guardamos la lista actualizada
    console.log(`Contacto agregado: ${nombre}`);
};

// Listar los contactos
const listarContactos = () => {
    const contactos = leerContactos(); // Leemos los contactos
    console.log('Lista de contactos:');
    contactos.forEach(contacto => {
        console.log(`${contacto.id}. ${contacto.nombre} - Teléfono: ${contacto.telefono}, Correo: ${contacto.correo}`);
    });
};

// Eliminar un contacto
const eliminarContacto = (idContacto) => {
    let contactos = leerContactos(); // Leemos los contactos
    contactos = contactos.filter(contacto => contacto.id !== idContacto); // Filtramos para eliminar el contacto por ID
    escribirContactos(contactos); // Guardamos la lista actualizada
    console.log(`Contacto eliminado.`);
};
// Ejemplo de uso

agregarContacto('Jake Jobs', '123-456-789', 'jakeJ@gmail.com');
listarContactos;
