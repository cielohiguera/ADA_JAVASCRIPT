// Clasificacion de edades

// Solicitar al usuario una edad y usa una funcion flecha para clasificarla en 
// niño, adolescente, adulto o adulto mayor.

const prompt = require('prompt-sync')();
let edad = parseFloat(prompt("Ingresa una edad: "));


const clasificacionEdades = (edades) => {
    if (edad < 13) return "Niño";
    else if (edad < 18) return "Adolescente";
    else if (edad < 65) return "Adulto";
    else return "Adulto mayor";
}

let edadUsuario = clasificacionEdades(edad);
console.log("La clasificacion del usuario de acuerdo a su edad es: ", edadUsuario);