// Ejemplo de una función generica 
function identidad <T>(valor: T): T{
    return valor
}

// Ejemplo de uso de la función
let numero = identidad<number>(10)
console.log(`Ejemplo de uso con tipo numer: ${numero}`);

let texto = identidad<string>("Hola");
console.log(`Ejemplo de uso con tipo string: ${texto}`);
