// Tienes un parque de diversiones que permite la entrada a personas
// mayores de 12 años y menores de 60. Escribe una función que reciba una
// lista de edades y devuelva cuántas personas pueden entrar al parque.
// Consigna:
// • Usa un bucle for y condicionales.
// • Usa un array como entrada de la función.
// • Devuelve el número de personas que cumplen con los requisitos.

let edades = [12, 4, 52, 63, 48, 50, 18];

function cuantasPersonasIngresan(arreglo) {
    let suma = 0;
    for(let i = 0; i <= edades.length; i++) {
        if (arreglo[i] >= 12 && arreglo[i] < 60) {
            suma ++;
        }
    }
    return suma;
}

console.log(cuantasPersonasIngresan(edades));