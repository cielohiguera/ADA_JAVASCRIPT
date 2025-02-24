const readlineSync = require('readline-sync')

const edad = readlineSync.questionInt('Por favor, ingresa tu edad: ');

if (edad >= 18) {
    console.log('Eres mayor de edad y puedes entrar al club');
} else {
    console.log('Lo siento, no puedes ingresar')
}