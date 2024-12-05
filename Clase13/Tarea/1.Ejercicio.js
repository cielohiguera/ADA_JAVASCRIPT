// Ejercicio 1: Area de un triangulo (funcion declarada)
// Crear una funcion declarada llamada calcularAreaTriangulo que reciba dos parametros: la base y la altura de un triangulo
const prompt = require('prompt-sync')();
let base = parseFloat((prompt("Ingresa la base del triangulo: ")));
let altura = parseFloat((prompt("Ingresa la altura del triangulo: ")));

function calcularAreaRectangulo(base, altura){
    let area = (base*altura)/2;
    return area; // formula para calcular
}
console.log("Area de un rectangulo:", calcularAreaRectangulo(base, altura));