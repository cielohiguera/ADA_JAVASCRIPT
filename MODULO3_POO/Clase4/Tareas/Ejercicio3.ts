// Actividad 3: Crear una función genérica
// Crea una función genérica que tome un parámetro de cualquier tipo y lo
// devuelva. Prueba la función con diferentes tipos de datos.

function devolverValor<T>(valor: T): T {
    return valor;
}

// Podemos probar con diferentes tipos de datos
export const texto = devolverValor<string>('Hola mundo');
export const numeros = devolverValor<number>(52);
export const booleano = devolverValor<boolean>(true);


console.log("Texto:", texto);
console.log("Número:", numeros); 
console.log("Booleano:", booleano);