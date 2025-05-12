// 1. Intervalo indefinido (cancelación manual)
// El setInterval() seguira ejecutandose hasta que lo detengamos manualmente
let contador = 0;
const intervalo = setInterval(() => {
    contador ++
    console.log(`Contador (indefinido): ${contador}`);
    // Aqui podriamos llamar a clearInterval (intervalo) en algun momento para detener
    // el intervalo. Por ejemplo, podrías tener alguna condicion externa
    // o un evento que lo detenga, pero en este caso lo dejamos indefinidamente
}, 1000)

console.log("Intervalo indefinido iniciado");
