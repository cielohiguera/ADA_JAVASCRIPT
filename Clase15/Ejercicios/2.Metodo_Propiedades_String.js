// Creamos una cadena como ejemplo
let descripcionPerro = " El pastor Alemán es un perro muy inteligente y leal.  ";
console.log("Cadena original: ", `"${descripcionPerro}"`);

// PROPIEDADES

// 1. Propiedad .length: Devuelve la longitud de la cadena
console.log("Longitud de la cadena con .length", descripcionPerro.length);
// Longitud de la cadena con .length 55 (contando los espacios)

// 2. Propiedad IndexOf: Devuelve el primer indice donde se ecnuentra una subcadena (o -1 si no esta)
let indiceInteligente = descripcionPerro.indexOf("inteligente");
console.log("Indice de 'inteligente' con indexOf: ", indiceInteligente);
// Resultado: Indice de 'inteligente' con indexOf:  34

let indiceLabrador = descripcionPerro.indexOf("Labrador");
console.log("Indice de 'Labrador' con indexOf (no esta en la cadena):", indiceLabrador);
// Resultado: Indice de 'Labrador' con indexOf (no esta en la cadena): -1

// METODOS
// 3.Metodo slice: Extrae una parte de la cadena entre dos índices y devuelce una nueva cadena
let subcadena = descripcionPerro.slice(3, 17);
console.log("Subcadena con slice(3, 17):", `"${subcadena}"`);
// Resultado Subcadena con slice(3, 17): " pastor Alemán"

// 4. Metodo trim: Elimina los espacios en blanco al inciio y al final de la cadena.
let cadenaSinEspacios = descripcionPerro.trim();
console.log("Cadena después del trim():", `"${cadenaSinEspacios}"`);
// Cadena después del trim(): "El pastor Alemán es un perro muy inteligente y leal."

// 5. Metodo replace: Remplaza una subcadena por otra.
let cadenaReemplaza = descripcionPerro.replace("inteligente", "valiente");
console.log("Cadena despues de replace('inteligente', 'valiente'):", `"${cadenaReemplaza}"`);
// Resultado: cadena despues de replace('inteligente', 'valiente'): " El pastor Alemán es un perro muy valiente y leal.  "

// 6. Metodo split: Divide la cadena en un array según un delimitador
let palabras = descripcionPerro.split(" ");
console.log("Cadena dividida con split(' '):", palabras);
// Resultado: ["", "", "El", "Pastor", "Alemán", "es", "un", "perro", "muy", "inteligente", "y", "leal.", "", ""]