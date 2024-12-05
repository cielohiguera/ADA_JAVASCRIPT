// Recorrer matrices
// Recorrer por fila

const matriz = [
    [1, 3, 5, 7],
    [0, 2, 4, 6],
    [8, 9, 10, 11]
];
// Determinar que fila queremos recorrer, por ejemplo la fila 1
console.log('\nRecorrer una matriz usando solo la fila ');
for (let i = 0; i < matriz[1].length; i++) {
    console.log(matriz[1][i]);
}
// Recorrer una columna: Ahora determinamos la columna que queremos recorrer, por ejemplo la columna 2
console.log('\nRecorrer una matriz usando solo la columna ');
for (let i=0; i < matriz.length; i++) {
    console.log(matriz[i][2])
}
// Recorrer la matriz completa recorriendo primero la fila 0, luego la 1 y así hasta terminar con todas las filas
console.log('\nRecorrer una matriz usando las filas con las columnas ');
for (let fila = 0; fila < matriz.length; fila++){
    for (let columna = 0; columna < matriz[fila].length; columna++){
        console.log(matriz[fila][columna]);
    }
}
// Recorrer la matriz completa, recorriendo primero la columna 0, luego la 1 y así hasta terminar con todas las columnas
console.log('\nRecorrer una matriz usando las columnas con las filas ');
for (let columna = 0; columna < matriz[0].length; columna++) {
    for (let fila = 0; fila < matriz.length; fila++) {
        console.log(matriz[fila][columna]);
    }
}