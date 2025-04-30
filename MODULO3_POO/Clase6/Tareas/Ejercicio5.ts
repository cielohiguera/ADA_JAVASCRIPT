// Ejercicio 5: Herencia con Modificadores de Acceso
// Consigna: Crea una clase base Compania con un atributo privado
// nombreCompania y un atributo protegido ingresosAnuales. Crea una clase
// derivada EmpresaTecnologia que use el atributo protegido y agregue un
// método que calcule el doble de los ingresos anuales.

class Compania {
    private nombreCompania: string;
    protected ingresosAnuales: number;
    // Propiedad 'Ingresos Anuales son protegidos dentro de la clase y sus subclases
    constructor(nombreCompania: string, ingresosAnuales: number) {
        this.ingresosAnuales = ingresosAnuales; // Crear instancia proporcionado por la clase
        this.nombreCompania = nombreCompania; // Crear instancia proporcionado por la clase
    }
}

class EmpresaTecnologia extends Compania {
    constructor(nombreCompania: string, ingresosAnuales: number) {
        super(nombreCompania, ingresosAnuales);
    }
    public calcularDobleIngresos(): number {
        return this.ingresosAnuales * 2;
    }
}

// Ejemplo de uso

const empresa = new EmpresaTecnologia('Steren', 10000000)
console.log(`El ingreso generado anual por la empresa Steren es de: `, empresa.calcularDobleIngresos())