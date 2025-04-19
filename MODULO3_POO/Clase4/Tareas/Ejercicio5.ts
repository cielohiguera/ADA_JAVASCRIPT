// Actividad 5: Usar aserciones dobles
// Crea una variable de tipo any y haz una conversión con aserciones dobles para
// convertirla en un number. Muestra el resultado.

// Variable de tipo any
let valor: any = "3.1416"

// Aserción doble de anu -> unknown -> number
let number = (valor as unknown as number);

console.log("Valor convertido a número:", number);