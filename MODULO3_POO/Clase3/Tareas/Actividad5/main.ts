// Actividad 5: Re-exportación de Módulos
// Crea un módulo index.ts que re-exporte todas las funciones y constantes de los
// módulos mathUtils.ts y stringUtils.ts.
// En main.ts, importa todo desde index.ts y utiliza al menos una función de cada
// módulo, mostrando el resultado en la consola.


import { add, capitalize } from './index'

console.log("Resultado de suma:", add(7, 8));          // 15
console.log("Texto capitalizado:", capitalize('typescript'));     // "Typescript"