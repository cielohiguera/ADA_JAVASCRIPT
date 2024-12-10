// Ejercicio 8: Funcion backEnd()
// Creá la función backEnd() que recibirá 2 números como parámetros. La
// función deberá imprimir por pantalla los números del 1 al 100, pero teniendo
// en cuenta los siguientes criterios:

// ✓ Si el número a imprimir es múltiplo del primer parámetro que se
// ingresó, deberá mostrar el string “Back” en lugar del número.
// ✓ Si el número a imprimir es múltiplo del segundo parámetro ingresado,
// deberá mostrar el string “End” en su lugar del número.
// ✓ Si el número a imprimir es múltiplo de ambos parámetros, deberá
// mostrar el string “Back End” en lugar del número.

function backEnd(num1, num2) {
    resultado = []; // Array vacio para guardar los valores adecuados del for

    // Recorremos valores 
    for (let i = 1; i <= 100; i++) { // Se comprueba si es multiplo de ambos parametros
        if (i % num1 === 0 && i % num2 === 0) {
            resultado[i - 1] = "BackEnd"
        } else if ( i % num1 === 0) { // Solo se comprueba si es multiplo de un parametro
            resultado [i - 1] = "Back";
    } else if ( i % num2 === 0) { // Se comprueba si es multiplo del segundo parametro
        resultado [i - 1] = "End";
    } else {
    resultado[i - 1] = i; // se devuelve el numero
    }
  }
  return resultado;
}

console.log(backEnd(3, 5));