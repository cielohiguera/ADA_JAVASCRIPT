"use strict";
// 2. Intervalo con condicion de parada
// Este intervalo se detendra automaticamente cuando el contador llegue a 5
Object.defineProperty(exports, "__esModule", { value: true });
exports.contador = void 0;
exports.contador = 0;
const intervalo = setInterval(() => {
    exports.contador++;
    console.log(`Contador (con condicion): ${exports.contador}`);
    if (exports.contador === 5) {
        clearInterval(intervalo); // Cancela el intervalo cuando el contador llega a 0
        console.log("Intervalo con condiciopn detenido al llegar a 5");
    }
}, 1000);
// Este segundo intervalo se ejecuta hasta quie llegue a 5, despues de lo cual se 
// deteniene automaticamente.
