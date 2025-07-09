"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Actividad 10: Consolidación de Módulos
// Crea un archivo utils/index.ts que centralice las exportaciones de mathUtils.ts,
// stringUtils.ts y user.ts.
// Asegúrate de que todas las funciones se puedan importar desde utils/index.ts.
// En main.ts, importa lo necesario desde utils/index.ts y utiliza las funciones en un
// solo flujo de trabajo, mostrando todos los resultados en la consola.
__exportStar(require("../Actividad1/mathUtils"), exports);
__exportStar(require("../Actividad2/stringUtils"), exports);
__exportStar(require("../Actividad9/types"), exports);
