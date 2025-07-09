"use strict";
// Actualizacion de una interfaz grafica 
// setInterval() también puede ser útil para actualizar partes de una
// interfaz grafica de forma periodica. Por ejemplo, un reloj
// que se actualiza cada segundo 
function actualizarReloj() {
    // Creamos una nueva instancia de date para obtener la fecha y hora
    // actuales
    const ahora = new Date();
    // Obtenemos la hora actual (del 0 al 23) de la instancia de date
    const horas = ahora.getHours();
    // Obtenemos los minutos actuales (de 0 a 59) de la instancia date
    const minutos = ahora.getMinutes();
    // Obtenemos los segundos actuales (de 0 a 59) de la instancia date
    const segundos = ahora.getSeconds();
    // Mostramos la hora actual en formato "horas:minutos:segundos"
    console.log(`${horas}:${minutos}:${segundos}`);
}
// Se crea un intervalo que llama a la función de actualizarReloj cada segundo (1000 ms)
let relojIntervalo = setInterval(actualizarReloj, 1000);
// Importante: este intervalo seguira ejecutandose indefinidamente hasta que sea detenido manualmente
// usando el clar si se necesita
