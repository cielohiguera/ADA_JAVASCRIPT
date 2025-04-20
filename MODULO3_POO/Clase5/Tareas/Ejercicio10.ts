// Ejercicio 10: Registro de Estudiantes
// 1. Crea un sistema para registrar Estudiantes con las siguientes clases:
// o Estudiante: Clase que incluye propiedades como nombre, edad y
// curso, además de un método que muestre la información del
// estudiante.
// o RegistroEstudiantes: Clase que maneje una lista de estudiantes, con
// métodos para agregar un estudiante y mostrar todos los estudiantes
// registrados.


// Clase Estudiante
class Estudiante {
    nombre: string;
    edad: number;
    curso: string;
  
    constructor(nombre: string, edad: number, curso: string) {
      this.nombre = nombre;
      this.edad = edad;
      this.curso = curso;
    }
  
    mostrarInformacion(): void {
      console.log(`Estudiante: ${this.nombre} | Edad: ${this.edad} | Curso: ${this.curso}`);
    }
  }
  
  // Clase RegistroEstudiantes
  class RegistroEstudiantes {
    private listaEstudiantes: Estudiante[] = [];
  
    agregarEstudiante(estudiante: Estudiante): void {
      this.listaEstudiantes.push(estudiante);
      console.log(`Estudiante ${estudiante.nombre} registrado correctamente.`);
    }
  
    mostrarEstudiantes(): void {
      console.log("\nLista de Estudiantes Registrados:");
      this.listaEstudiantes.forEach((estudiante) => {
        estudiante.mostrarInformacion();
      });
    }
  }


const registro = new RegistroEstudiantes();

const estudiante1 = new Estudiante("Laura", 20, "Matemáticas");
const estudiante2 = new Estudiante("Carlos", 22, "Ingeniería");
const estudiante3 = new Estudiante("María", 19, "Biología");

registro.agregarEstudiante(estudiante1);
registro.agregarEstudiante(estudiante2);
registro.agregarEstudiante(estudiante3);

registro.mostrarEstudiantes();