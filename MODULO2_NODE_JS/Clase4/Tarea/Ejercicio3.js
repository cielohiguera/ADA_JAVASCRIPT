// Ejercicio 3: ¡Actualiza tu estilo!
// Consigna:
// ¿Has cambiado tu estilo o actividad reciente? ¡Es momento de actualizar
// tu perfil! Agrega un nuevo atributo hobby a tu perfil y guarda los cambios
// en el archivo perfil.json.
// Pista: Primero, lee el archivo existente, actualiza el objeto y vuelve a
// escribirlo.

const fs = require('fs')

fs.readFile('perfil.json', 'utf-8', (err, data) => {
    if (err) {
        console.error('No se ha podido leer tu archivo', err);
    } else {
        const perfil = JSON.parse(data);

        // Agregamos un nuevo atributo
        perfil.hobby = "Lectura";
        // Guardamos el objeto actualizado en ela archivo
        fs.writeFile('perfil.json', JSON.stringify(perfil, null, 2), (err) => {
            if(err) {
                console.error('No se pudo actualizar tu perfil', err);
            } else {
                console.log('Tu perfil ha sido actualizado.')
            }
        });
    }
});