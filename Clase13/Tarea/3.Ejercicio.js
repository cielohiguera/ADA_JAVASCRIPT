// Mensaje global y local
// Declara una variable global llamada saludoGlobal con el valor "Hola desde el scope". Luego, crea una funcion llamada mostrarMensaje
// que declare una variable local llamada saludoLocal con el valor "Hola desde el scope" y que imprima ambos mensajes
let saludoGlobal = "Hola desde el Scope Global"
function mostrarMensaje () {
    console.log(saludoGlobal);
}

mostrarMensaje();

function mostrarMensaje () {
    // 2. Variable con Scope Local
    // Las variables definidas dentro de una funcion solo existen
    // dentro de una funciom
    let saludoLocal = "Hola estoy desde el Scope Local"
    console.log(saludoGlobal);
    console.log(saludoLocal);
}

mostrarMensaje();
// console.log(mensajeLlocal); // -> Esto es un error por llamar a la variable local por fuera de la función.
