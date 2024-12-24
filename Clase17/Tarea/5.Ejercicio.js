// Ejercicio 5: Manipulación de Arrays y Cadenas
// A partir del siguiente array de frases, escribe la función “procesarFrases”
// que realice las siguientes tareas:
// 1. Convierta cada frase a minúsculas. Investigar el método
// “.toLowerCase()” para este punto.
// https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/String/toLower
// Case
// 2. Divida cada frase en palabras.
// 3. Reemplace las palabras "malo" por "bueno".
// 4. Combine las palabras de cada frase en una nueva cadena
// separada por espacios.
// 5. Devuelva un nuevo array con las frases modificadas.

let frases = [
    "El clima es muy MALO hoy",
    "Este libro es muy MALO",
    "El servicio aquí es MALO"
]

function procesarFrases(frases) {
    // Convertir cada frase en minúsculas
    let frasesMinusculas = frases.map(frase => frase.toLowerCase());
    
    // Dividir cada frase en palabras
    let frasesDivididas = frasesMinusculas.map(frase => frase.split(" "));
    
    // Reemplazar la palabra "malo" por "bueno"
    let frasesReemplazadas = frasesDivididas.map(palabras =>
        palabras.map(palabra => palabra === "malo" ? "bueno" : palabra)
    );
    
    // Combinar las palabras de cada frase en una nueva cadena
    let frasesCombinadas = frasesReemplazadas.map(palabras => palabras.join(" "));
    
    return frasesCombinadas;
}

let resultado = procesarFrases(frases);
console.log(resultado);

// Resultado
// [
//     'el clima es muy bueno hoy',
//     'este libro es muy bueno',
//     'el servicio aquí es bueno'
//   ]