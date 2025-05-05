// 10. Ejercicio de Taller de Reparaciones
// Diseña una clase Taller que tenga propiedades privadas para nombre, direccion,
// servicios (un array de objetos con nombreServicio, precio, y descripcion), y
// calificaciones (un array para almacenar las calificaciones de los clientes).
// Implementa métodos para agregar servicios, eliminar servicios, listar los
// servicios disponibles, agregar calificaciones y calcular el promedio de
// calificaciones. Si se intenta agregar un servicio con un precio negativo, imprime
// un mensaje informativo. También imprime un mensaje si se intenta agregar una
// calificación que no está entre 1 y 5.

interface Servicio {
    nombreServicio: string;
    precio: number;
    descripcion: string;
  }
  
  class Taller {
    private _nombre: string;
    private _direccion: string;
    private _servicios: Servicio[] = [];
    private _calificaciones: number[] = [];
  
    constructor(nombre: string, direccion: string) {
      this._nombre = nombre;
      this._direccion = direccion;
    }
  
    // Agrega un servicio si el precio es válido
    public agregarServicio(servicio: Servicio): void {
      if (servicio.precio < 0) {
        console.log("Error: el precio del servicio no puede ser negativo.");
      } else {
        this._servicios.push(servicio);
        console.log(`Servicio "${servicio.nombreServicio}" agregado correctamente.`);
      }
    }
  
    // Elimina un servicio por nombre
    public eliminarServicio(nombreServicio: string): void {
      const index = this._servicios.findIndex(s => s.nombreServicio === nombreServicio);
      if (index === -1) {
        console.log(`Error: el servicio "${nombreServicio}" no existe.`);
      } else {
        this._servicios.splice(index, 1);
        console.log(`Servicio "${nombreServicio}" eliminado correctamente.`);
      }
    }
  
    // Lista todos los servicios
    public listarServicios(): void {
      console.log(`Servicios disponibles en el taller "${this._nombre}":`);
      if (this._servicios.length === 0) {
        console.log("No hay servicios registrados.");
      } else {
        this._servicios.forEach((s, i) => {
          console.log(`${i + 1}. ${s.nombreServicio} - $${s.precio} | ${s.descripcion}`);
        });
      }
    }
  
    // Agrega una calificación entre 1 y 5
    public agregarCalificacion(nota: number): void {
      if (nota < 1 || nota > 5) {
        console.log("Error: la calificación debe estar entre 1 y 5.");
      } else {
        this._calificaciones.push(nota);
        console.log(`Calificación ${nota} agregada correctamente.`);
      }
    }
  
    // Calcula el promedio de calificaciones
    public promedioCalificaciones(): number {
      if (this._calificaciones.length === 0) return 0;
      const suma = this._calificaciones.reduce((acc, val) => acc + val, 0);
      return parseFloat((suma / this._calificaciones.length).toFixed(2));
    }
  
    // Mostrar promedio
    public mostrarPromedio(): void {
      const promedio = this.promedioCalificaciones();
      console.log(`Promedio de calificaciones: ${promedio}`);
    }
  }
  
  // Ejemplo de uso
  const miTaller = new Taller("Taller El Rápido", "Av. Siempre Viva 742");
  
  miTaller.agregarServicio({ nombreServicio: "Cambio de aceite", precio: 30, descripcion: "Cambio de aceite de motor" });
  miTaller.agregarServicio({ nombreServicio: "Alineación", precio: -20, descripcion: "Servicio de alineación de llantas" });
  miTaller.agregarServicio({ nombreServicio: "Revisión de frenos", precio: 50, descripcion: "Inspección y ajuste de frenos" });
  
  miTaller.listarServicios();
  miTaller.eliminarServicio("Alineación");
  miTaller.eliminarServicio("Lavado");
  
  miTaller.agregarCalificacion(5);
  miTaller.agregarCalificacion(3);
  miTaller.agregarCalificacion(6); // inválida
  miTaller.mostrarPromedio();
  