// Ejercicio 2: Conversión de objetos JavaScript a JSON
// 1.En la misma carpeta clase2, crea un nuevo archivo llamado
// actividad2.js.
// 2.Crea un objeto en JavaScript que represente a un estudiante con las
// siguientes propiedades: nombre, edad, curso, notas (un array de
// números).
// Instrucciones:
// • Convierte este objeto a una cadena JSON usando JSON.stringify().
// • Muestra la cadena JSON en la consola.
// • Luego, convierte la cadena JSON de nuevo a un objeto utilizando
// JSON.parse() y muestra el objeto en la consola.

// Objeto de estudiante

let estudiante = {
    nombre: "Cielo Higuera",
    edad: 25,
    curso: "Ciencia de datos",
    notas: [9, 10, 9, 8, 10]
};

let estudianteCadena = JSON.stringify(estudiante);
console.log("Cadena JSON: ", estudianteCadena);

// Convertir la cadena JSON de nuevo a un objeto

let estudianteObjeto = JSON.parse(estudianteCadena);
console.log("Objetivo convertido: ", estudianteObjeto)

// Cadena JSON:  {"nombre":"Cielo Higuera","edad":25,"curso":"Ciencia de datos","notas":[9,10,9,8,10]}
// Objetivo convertido:  {
//   nombre: 'Cielo Higuera',
//   edad: 25,
//   curso: 'Ciencia de datos',
//   notas: [ 9, 10, 9, 8, 10 ]
// }