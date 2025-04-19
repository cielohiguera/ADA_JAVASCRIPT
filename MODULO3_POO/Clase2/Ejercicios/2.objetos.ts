// 1. Definir un objeto básico
let auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2022
}

// mostramos las propiedades del objeto en consola
console.log(`Marca: ${auto.marca}, Modelos: ${auto.modelo}, Anio: ${auto.anio}`)

// 2. Declaración explicita del tipo de un objeto

let libro : {titulo: string; autor: string, anio: number} = {
    titulo: 'Harry Potter',
    autor: 'J.K.',
    anio: 2001
}
// mostramos las propiedades del objeto en la consola
console.log(`Titulo: ${libro.titulo}, autor: ${libro.autor}, Anio: ${libro.anio}`);

// 3. Propiedades opcionales
let estudiante: {nombre: string, edad?: number} = {
    nombre: "Cielo",
}
console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad ?? "Desconocida"}`)

// 4. Métodos en un objeto
let perro = {
    nombre: "Blaki",
    raza: "Caniche",
    ladrar: function() {
        return `${this.nombre} esta ladrando!`
    }
}

console.log(perro.ladrar())
