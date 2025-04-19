// Ejercicio 7: Tipos literales
// Usa un tipo literal para declarar una variable que solo acepte uno de los valores:
// "Lunes", "Martes", "Miércoles". Intenta asignar otros valores y observa el error en
// TypeScript.


let diaSemana: "Lunes" | "Martes" | "Miercoles";

diaSemana = "Lunes";
console.log("Dia valido: ", diaSemana);

// diaSemana = "Jueves";
// console.log('Dia invalido: ', diaSemana)

// TSError: ⨯ Unable to compile TypeScript:
// Ejercicio7.ts:12:1 - error TS2322: Type '"Jueves"' is not assignable to type '"Lunes" | "Martes" | "Miercoles"'.

// 12 diaSemana = "Jueves";