// Ejercicio 10: ¡Haz un respaldo de tus metas!
// Consigna:
// Nunca está de más guardar una copia de seguridad. Escribe un programa
// que copie el contenido de metas.json en un archivo llamado
// respaldo_metas.json.
// Pista: Usa el método fs.copyFile para copiar archivos de manera
// sencilla.

// Importamos el módulo fs para manejar archivos
const fs = require('fs');

// Copiamos el archivo metas.json en respaldo_metas.json
fs.copyFile('metas.json', 'respaldo_metas.json', (err) => {
    if (err) {
        console.error("Error al crear el respaldo:", err);
    } else {
        console.log("¡Respaldo creado exitosamente!");
    }
});