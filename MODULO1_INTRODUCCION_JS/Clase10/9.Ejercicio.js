// Ejercicio 9: Calculo del IMC // En este programa calcula el índice de masa corporal (IMC), la formula es la siguiente IMC = peso(kg)/altura(m^2)
const prompt = require('prompt-sync')();
let pesoUsuario = parseFloat(prompt('Ingresa tu peso en kg: '));
let alturaUsuario = parseFloat(prompt('Ingresa tu altura en metros: '));
// 2. Calcular la altura en metros cuadrados
let alturaMetros = alturaUsuario * alturaUsuario;
// 3. Calcular el IMC
let imc = pesoUsuario/alturaMetros;
// 4. Mostrar en consola
console.log("Tu índice de masa corporal (IMC) es: ", imc);