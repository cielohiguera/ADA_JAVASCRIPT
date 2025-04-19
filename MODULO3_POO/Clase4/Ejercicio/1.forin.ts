// Ejemplo básico con un objeto

let alumna = {
    nombre: "Lucia",
    edad: 22,
    curso: "Programacion"
}
// Este for in va iterar sobre las propiedades del objeto de alumna, se imprimen las claves y
// los valores correspondientes
for (let propiedad in alumna) {
    console.log(`Clave: ${propiedad}, Valor: ${alumna[propiedad as keyof typeof alumna]}`)
};

// keyof typeof: con esto estamos queriendo decir que la variable 'propiedad' es una clave válida
// para el objeto 'alumna'
// Ejemplo de for.. in en arrays

let arrayLenguajes = ["JavaScript", "Python", "C++"]

for (let lenguajes in arrayLenguajes) {
    console.log(`Ejemplo array: ${lenguajes}`)
}