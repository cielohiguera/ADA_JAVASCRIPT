// Ejemplo: Determinar el día de la semana según un número

// Paso 1: Declaramos una variable con un número que representa el día de la semana
let diaNumero = 3;
// Paso 2: Usamos un switch para determinar el día correspondiente
let diaNombre; // Declaramis una variable para que sr mr guarde el nombre del día
switch (diaNumero) {
    case 1: // si díaNumero es 1
     diaNombre = "Lunes";
     break // salimos del switch
    case 2: // si díaNumero es 2
     diaNombre = "Martes";
     break // salimos del switch
    case 3: // si díaNumero es 3
     diaNombre = "Miercoles";
     break // salimos del switch
    case 4: // si díaNumero es 4
     diaNombre = "Jueves";
     break // salimos del switch
    case 5: // si díaNumero es 5
     diaNombre = "Viernes";
     break // salimos del switch
    case 6: // si díaNumero es 6
     diaNombre = "Sabado";
     break // salimos del switch
    case 7: // si díaNumero es 7
     diaNombre = "Domingo";
     break // salimos del switch
    default: // Si diaNumero no es ni del 1 al 7
     diaNombre = "Numero invalido. Debe ser del 1 al 7";
}
// Paso 3: imprimo en consola
console.log(diaNombre)