"use strict";
// Actividad 5: Re-exportación de Módulos
// Crea un módulo index.ts que re-exporte todas las funciones y constantes de los
// módulos mathUtils.ts y stringUtils.ts.
// En main.ts, importa todo desde index.ts y utiliza al menos una función de cada
// módulo, mostrando el resultado en la consola.
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
__exportStar(require("../Actividad1/mathUtils"), exports);
__exportStar(require("../Actividad2/stringUtils"), exports);
