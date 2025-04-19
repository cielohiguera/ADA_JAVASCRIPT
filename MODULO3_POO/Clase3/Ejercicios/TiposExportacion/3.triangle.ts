// La función no se exporta y es privada al modulo
// ambos dfunción y name se exportan directamente

// Función privada no exportada
const logCalculate = (area: number) => {
    console.log(`Calculate area: ${area}`);
}

// exportación directa de la funcion
export const calculateTriangleArea = (base: number, height: number): number => {
    const area = (base * height) / 2
    logCalculate(area) // uso de la función privada
    return area
}

export const TRIANGLE_NAME = 'Triangle'