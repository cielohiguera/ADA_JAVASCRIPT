// Declaramos un array
export let lenguajes = ["JavaScript", "Python", "C++"];

for (let lengauje of lenguajes) {
    console.log(`Ejemplo de array: ${lengauje}`);
}

// En este caso el buble for .. of recorre los valores del array.

// Ejemplo de fpr of con cadena de texto (string)
console.log("------------------------")
let saludo = "Hola";

for (let letra of saludo) {
    console.log(`Ejemplo de cadena de texto: ${letra}`);
    
}