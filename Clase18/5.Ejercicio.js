// Ejercicio 5: Servicio meteorologico
// El servicio meteorológico, para llevar el control diario de temperatura,
// utiliza un objeto temperatura donde registra día —valor numérico del
// día—, mes —valor numérico—, temperatura máxima y temperatura
// mínima, correspondiente a dicho día. Las temperaturas —objeto
// temperatura— están cargados en un array.
// a) Ordenar por temperatura mínima de menor a mayor.
// b) Ordenar por temperatura máxima de mayor a menor.

let temperatura = [
    { dia: 1, mes: 4, tempMax: 21, tempMin: 4},
    { dia: 2, mes: 4, tempMax: 23, tempMin: 5},
    { dia: 3, mes: 4, tempMax: 20, tempMin: 6},
    { dia: 4, mes: 4, tempMax: 25, tempMin: 7},
    { dia: 5, mes: 4, tempMax: 21, tempMin: 3}
];

// a) Ordenar por temperatura mínima de menor a mayor
let ordenadoPorTempMin = temperatura.slice().sort((a, b) => a.tempMin - b.tempMin);

// b) Ordenar por temperatura máxima de mayor a menor
let ordenadoPorTempMax = temperatura.slice().sort((a, b) => b.tempMax - a.tempMax);

console.log("Ordenado por temperatura mínima (menor a mayor):");
console.log(ordenadoPorTempMin);

console.log("Ordenado por temperatura máxima (mayor a menor):");
console.log(ordenadoPorTempMax);