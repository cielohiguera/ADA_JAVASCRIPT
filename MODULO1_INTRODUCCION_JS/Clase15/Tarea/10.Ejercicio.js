// Ejercicio 10: Reemplazar una palabra en una frase
// Tienes la frase "Me gusta el invierno". Cambia la palabra "invierno" por
// "verano" y muestra la frase actualizada.

let invierno = "Me gusta el invierno";
console.log("Cadena antes de aplicar el metodo replace", invierno);

// Aplicando el método replace
let verano = invierno.replace("invierno", "verano");
console.log("Cadena despues de aplicar replace ('invierno', 'verano'): ", verano);
