"use strict";
// 2. Ejecucion con cancelacion
// Puedes asignar setTimeOut a una variable y luego cancelarlo antes
// de que se cumpla se cumpla el tiempo utilizando clearTimeOut
let temporizador = setTimeout(() => {
    console.log("Este mensaje no se mostrara porque cancelaremos el temporizador");
}, 3000);
clearTimeout(temporizador); // cancelamos el temporizador antes de los tres segundos
// Por lo tanto, este codigo no se verá
