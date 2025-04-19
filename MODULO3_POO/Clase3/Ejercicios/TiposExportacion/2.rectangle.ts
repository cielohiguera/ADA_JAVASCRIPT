// declaramos primero las funciones y constantes
// y luego las exportamos al final del archivo utilizando la expoeración separada

const calculateRentangleArea = (width : number, height: number): number => {
    return width * height;
}

const RENTANGLE_NAME = "Rectangle"

// Exportación separada
export {calculateRentangleArea, RENTANGLE_NAME}