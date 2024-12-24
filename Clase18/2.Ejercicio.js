// Ejercicio 2: FizzBuzz
// Escribe un programa que imprima los números del 1 al 100. Pero para los
// múltiplos de 3, imprime "Fizz" en lugar del número, y para los múltiplos de
// 5, imprime "Buzz". Para los números que son múltiplos de tanto 3 como 5,
// imprime "FizzBuzz".

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();