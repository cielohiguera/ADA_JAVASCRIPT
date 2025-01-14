// Ejercicio 2: El menú del día 🍽️
// Escribe una función que reciba un objeto con platos y precios, y devuelva
// los platos cuyo precio sea menor a $20.
// Consigna:
// • Usa un bucle for...in.
// • Usa objetos y arrays.

// Objeto con platos y precios

let menu = {
    "Ensalada": 15,
    "Sopa": 8,
    "Carne": 25,
    "Pasta": 18
};

function platosBaratos(menu) {
    let platillos = []; // Array para almacenar los platos

    for(let platos in menu) { // Se utiliza for .. in para recorrer el array en el que se esta almacenando
        if (menu[platos] < 20) { // Se hace una comparacion con los platillos que cuestan menos de 20 
            platillos.push(platos); // Va agregando aquellos platillos que seran almacenado en el array
        }
    }
    return platillos;
}

console.log("Los platillos que son menores a $20, son: ", platosBaratos(menu));