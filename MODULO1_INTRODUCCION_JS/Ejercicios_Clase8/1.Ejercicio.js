let edad = 19;
let acceso = '';

if (edad < 16) {
    acceso = 'prohibido';
} else if (edad >= 16 && edad <= 18 ) {
    acceso = 'permitido solo acompañado de un mayor';
} else {
    acceso = 'permitido;'
}
console.log(acceso);