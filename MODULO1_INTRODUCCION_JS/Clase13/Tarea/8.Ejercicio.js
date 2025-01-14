// Ejercicio 8: Convertir grados Celcius a Fahrenheit
// Crear una funcion expresada llamada convertirCelsiusAFahrenheit que reciba una temperatura en grados
// celsius y devuelva la temperatura en Fahrenheit
const prompt = require('prompt-sync')();
let gradosCelsius = parseFloat((prompt("Ingresa la temperatura en grados celsius: ")));

function convertirCelsiusAFahrenheit (gradosCelsius) {
    let celciusAFahrenheit = (gradosCelsius * 9/5) +32;
    return celciusAFahrenheit;
}
console.log("La conversion de grados Celsius a Fahrenheit es:", convertirCelsiusAFahrenheit(gradosCelsius))