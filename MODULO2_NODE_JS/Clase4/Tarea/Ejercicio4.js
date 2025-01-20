// Ejercicio 4: ¿Existe tu perfil?
// Consigna:
// Antes de hacer cualquier cosa, asegúrate de que tu archivo perfil.json
// existe. Si no existe, crea uno nuevo con un perfil básico.Pista: 
// Usa fs.existsSync para verificar la existencia del archivo.

const fs = require('fs')

// Verificamos si el archivo perfil.json existe

if (fs.existsSync('perfil.json')) {
    console.log('Tu perfil ya existe. Revisa el perfil.json')
} else {
    // Si no existe, creamos un archivo de perfil básico
    const perfilBasico = {
        nombre: "Cielo",
        edad: 25,
        ciudadFavorita: "San Diego"
    };
    fs.writeFile('perfil.json', JSON.stringify(perfilBasico, null, 2), (err) => {
        if (err) {
            console.error('No se ha podido crear el perfil básico:', err);
        } else {
            console.log('Tu perfil básico ha sido creado');
        }
    });
}