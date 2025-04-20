// Definición de una interfaz
interface Estudiante {
    nombre: string;
    edad: number;
    materiaFavorita: string;
    promedio: number;

    // Definir un método
    saludar: () => void // método saludar que no devuelva valor
    obtenerDetalles: () => string // método que devuelve string con detalles del alumno
}

// Creación de un objeto que cumple con la interfaz estudiante

export const estudiante1: Estudiante = {
    nombre: "Cielo",
    edad: 25,
    materiaFavorita: "Ciencia de datos",
    promedio: 98,

    // implementación de los métodos
    // Método 1: Saludar
    saludar: function() {
        console.log(`Hola soy ${estudiante1.nombre}, tengo ${estudiante1.edad} anios, mi materia favorita ${estudiante1.materiaFavorita}`);
    // Método 2: obtener detalles
    },
    
    obtenerDetalles: function() {
        return `Hola, soy ${estudiante1.nombre}, tengo ${estudiante1.edad} anios, mi materia favorita ${estudiante1.materiaFavorita} y mi promedio es ${estudiante1.promedio}`;
    }
}
// Uso de método saludar
estudiante1.saludar

// Obtener detalles de los alumnos
const detalles = estudiante1.obtenerDetalles();
console.log(detalles);
