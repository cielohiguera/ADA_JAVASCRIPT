// . En gestionEstudiantes.js:
// o Importa el array desde estudiantes.js.
// o Muestra en la consola los nombres de todos los estudiantes.
// o Calcula y muestra el promedio de notas de un estudiante
// específico.
// o Agrega un nuevo estudiante al array y muestra el array
// actualizado en formato JSON

// Importar el array de estudiantes

const estudiantes = require('./estudiantes.js');

// Mostrar los nombres de los estudiantes

console.log("Lista de estudiantes");
estudiantes.forEach(estudiante => {
    console.log(estudiante.nombre);
});
// Calcular el promedio de las notas de los estudiantes
const calcularPromedio = (notas) => {
    const suma = notas.reduce((acum, nota) => acum + nota, 0);
    return suma / notas.length;
};

const estudianteEspecifico = estudiantes.find(e => e.nombre === "Diana Garcia");
if (estudianteEspecifico) {
    const promedio = calcularPromedio(estudianteEspecifico.notas);
    console.log(`El promedio de notas de ${estudianteEspecifico.nombre} es: ${promedio.toFixed(2)}`);
} else {
    console.log("Estudiante no encontrado.");
}

// Agregar un nuevo estudiante al array
const nuevoEstudiante = {
    nombre: "Elsa Marquez",
    edad: 21,
    curso: "Bioinformatica",
    notas: [89, 94, 85]
};
estudiantes.push(nuevoEstudiante);

// Array actualizado en formato JSON
console.log("Lista actualizada de estudiantes:");
console.log(JSON.stringify(estudiantes, null, 2));
