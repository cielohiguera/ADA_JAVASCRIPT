// Decirle al copilador que tipo de datos quiere asumir cuando no puede inferir
// Ejemplo 1: asercion básica de tipo 'any' a 'string'
let valorGenerico: any = 'typeScript es genial';
// console.log(valorGenerico.length)

let longitudString: number = (valorGenerico as string).length
console.log(longitudString)

// Ejemplo 2: Aserciones con tipos de union
function obtenerNombreEnMayuscula(nombre:string | null): string {
    if (nombre) {
        return (nombre as string).toUpperCase()
    } else {
        return "Nombre no proporcionado"
    }
}

// Ponemos a prueba la función
console.log(obtenerNombreEnMayuscula('ana'))
console.log(obtenerNombreEnMayuscula(null))

console.log('----------------------------');

// Ejemplo 3: Uso de aserciones con unknown
export let valorDesconocido: unknown = "Este es un valor desconocido"
// console.log(valorDesconocido.length);

// Como no podemos acceder a sus propiedades directamente, usamos y lo cambiamos a tipo string
if (typeof valorDesconocido === 'string') {
    let longitud: number = (valorDesconocido as string).length
    console.log(`La longitud del string desconocido es: ${longitud}`);
    
}

// Ejemplo 4: Aserciones dobles (para convertir tipos incompatibles)
let valor: any = 'Este es un valor';
let valorNumerico = (valor as unknown as number)
console.log(`Valor numerico asercion doble: ${valorNumerico}`);

// Ejemplo 5: precauciones en aserciones
let valorErroneo: any = 42;
let textoErroneo = valorErroneo as string;
console.log(textoErroneo.length) //undefined