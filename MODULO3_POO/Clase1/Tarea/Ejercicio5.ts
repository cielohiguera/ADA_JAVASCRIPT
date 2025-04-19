// Ejercicio 5: Datos nulos y diferenciados
// Declara una variable de tipo string | null. Asigna inicialmente un valor de cadena,
// y luego cambia su valor a null. Imprime ambos estados en la consola, explicando
// el significado de null en TypeScript.

// Declaramos la variable que pueda ya sea una string o null
let mensaje: string | null = 'Hola mundo';
console.log("Valor inicial: ", mensaje);

// Cambiar el valor
mensaje = null;

// Imprimimos el mensaje cambiado
console.log("El nuevo valor es: ", mensaje);

// En TypeScript, null representa la ausencia intencional de cualquier valor.
// Es diferente de undefined (que significa que una variable no ha sido asignada aún).
// Usar `string | null` nos permite manejar escenarios donde la variable puede
// tener un valor válido (string) o estar vacía (null).