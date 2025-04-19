import createMultiplier from "./higherOrderFunctions";


const multiplyByTwo = createMultiplier(2); // Crear un multiplicador por 2
const multiplyByThree = createMultiplier(3); // Crear un multiplicador por 3

console.log(multiplyByTwo(5));  // Muestra: 10 (5 * 2)
console.log(multiplyByThree(5));  // Muestra: 15 (5 * 3)