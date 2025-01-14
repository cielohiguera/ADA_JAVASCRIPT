// Clasificación de palabras según su longitud
// Tienes una lista de palabras en una oración. Debes:
// 1. Dividir la oración en palabras individuales
// 2. Clasificar las palabras en dos categorías:
// ▪ Cortas (menos de 5 letras)
// ▪ Largas (5 letras o más)
// 3. Mostrar ambas listas de palabras clasificadas.
// 4. La oración es: "JavaScript es un lenguaje poderoso y versátil".

const oracion = "JavaScript es un lenguaje poderoso y versátil";

// Dividir la oración en palabras individuales
const palabras = oracion.split(" ");

// Clasificar las palabras en dos categorías
const cortas = [];
const largas = [];

palabras.forEach(palabra => {
  if (palabra.length < 5) {
    cortas.push(palabra);
  } else {
    largas.push(palabra);
  }
});

// Mostrar ambas listas de palabras clasificadas
console.log("Palabras cortas:", cortas);
console.log("Palabras largas:", largas);