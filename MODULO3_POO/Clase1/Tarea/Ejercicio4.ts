// Ejercicio 4: Parámetros opcionales simuladosDeclara dos variables, una para almacenar un nombre y otra para almacenar una
// edad. Si la edad no se asigna, debes imprimir un mensaje que diga "Edad no
// proporcionada". Si se asigna la edad, imprímela junto al nombre.

export let nombre: string = 'Olivia';
let edad: number | undefined = undefined;

// Verificación de edad
if(edad != undefined) {
    console.log(`Nombre ${nombre}, edad ${edad}`)
} else {
    console.log(`Nombre: ${nombre}. Edad no proporcionada`)
}