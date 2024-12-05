// Ejercicio 7: Mensaje según la hora
// Declara una variable global llamada horaACtual(puedes asignarle un valor fijo). Crea una funcion declarada llamada
// mostrarSaludo que imprima "Buenos días" si la hora es menor a 12, "Buenas tardes" si es menor a 18 o "Buenas noches"
// en cualquier otro caso.
let horaActual = 10; // 15 horas
function mostrarSaludo (horaActual) {
    if (horaActual < 12) {
        console.log("¡Buenos días!");
    } else if (horaActual < 18) {
        console.log("¡Buenas tardes");
    } else {
        console.log("¡Buenas noches!")
    }
    }
mostrarSaludo(horaActual);