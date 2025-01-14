// Ejercicio 6: Ordenando personas
// ¿Cómo podrías ordenar la colección, de menor a mayor, considerando
// solo la estatura? Utiliza bubble sort.

let personas = [
    {
        nombre: "Dua",
        apellido: "Lipa",
        ocupacion: "cantante",
        estatura: 173
    },
    {
        nombre: "Ariana",
        apellido: "Grande",
        ocupacion: "cantante",
        estatura: 160
    },
    {
        nombre: "Taylor",
        apellido: "Swift",
        ocupacion: "cantante",
        estatura: 180
    }
];

// Implementacion de bubble sort para ordenar las personas por estatura

function bubbleSortEstatura(lista) {
    let n = lista.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j <  n - 1; j++) {
            if (lista[j].estatura > lista[j + 1].estatura) {
                // Intercambiar elementos
                let temp = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = temp;
            }
        }
    }
}

bubbleSortEstatura(personas);
console.log("Lista ordenada por estatura", personas);