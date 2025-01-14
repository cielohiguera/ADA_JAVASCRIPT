// Ejercicio 5: Generador de iniciales 🅰️
// Escribe una función que reciba un nombre completo y devuelva las
// iniciales en mayúsculas.
// Consigna:
// • Usa el método split() para dividir el nombre.
// • Usa un bucle for y métodos de string

function generadorIniciales(nombre) {
    let letras = nombre.split(" "); // Se divide las palabras
    let iniciales = ""; // Se crea la siguiente variable para guardar las iniciales

    for (let i = 0; i < letras.length; i++) {
        if (letras[i].length > 0) {
            iniciales += letras[i][0].toUpperCase();
        }
    }
    return iniciales;
}

console.log(generadorIniciales("Emilia Perez"));
console.log(generadorIniciales("Harry James Potter"));
console.log(generadorIniciales("Cielo Aholiva Higuera Gutierrez"));