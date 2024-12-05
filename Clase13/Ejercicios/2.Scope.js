// Ejemplo Scope Global y Local

// 1. Variable con Scope Global
// Las variables definidas fuera de cualquier funcion son accesibles en todo el programa

let mensajeGlobal = "Estoy en el Scope Global"
function mostrarMensaje () {
    console.log(mensajeGlobal);
}

mostrarMensaje();

function mostrarMensaje () {
    // 2. Variable con Scope Local
    // Las variables definidas dentro de una funcion solo existen
    // dentro de una funciom
    let mensajeLlocal = "Estoy en el Scope Local"
    console.log(mensajeGlobal);
    console.log(mensajeLlocal);
}

mostrarMensaje();
// console.log(mensajeLlocal); // -> Esto es un error por llamar a la variable local por fuera de la función.