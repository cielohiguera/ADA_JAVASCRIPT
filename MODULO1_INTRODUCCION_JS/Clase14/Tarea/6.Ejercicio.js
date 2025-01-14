// Ejercicios de Objetos
// Ejercicio 6: El deportista
// Para este ejercicio deberán definir un objeto literal “deportista”, con los
// siguientes atributos: nombre, energía, experiencia.
// Ademas queremos poder pedirle al deportista que entrene. Para esto,
// nuestro trabajo va a ser realizar una función “entrenarHoras.”
// La función entrenarHoras tiene las siguientes tres características:
// ✓ Recibe por parámetro la cantidad de horas.
// ✓ Resta a su energía (this.energia) la cantidad de horas x 5.
// ✓ Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
// Una vez definida la función, podemos ejecutar el código y ver cómo va
// variando la energía y experiencia del deportista por consola.

const deportista = {
    nombre : "Serena Williams",
    energia : 3000,
    experiencia : 9,
    
    entrenarHoras : function (n) {
        // Resta su energia (this. energy) la cantidad de horas x 5
        this.energia = this.energia - (n * 5);
        // Incrementa su experiencia (this.experiencia) la cantidad de horas x 2
        this.experiencia = this.experiencia + (n * 2);

    }
}

console.log("ANTES DE ENTRENAR");
console.log("Deportista energía: ", deportista.energia);
console.log("Deportista experiencia: ", deportista.experiencia);

console.log("EL DEPORTISTA ENTRENA 7 HORAS")
deportista.entrenarHoras(7);

console.log("DESPUES DE ENTRENAR");
console.log("Deportista energía: ", deportista.energia);
console.log("Deportista experiencia: ", deportista.experiencia);
