// Definimos un objeto literal
/*
Estructura del Objeto Literal
nombre objeto = {
propiedad : valor1,
propiedad2 : valor2,
propiedad3: valor3,
nombreMetodo: function () {
return Logica}
}
*/

const auto = {
    marca : "Toyota",
    modelo : "Corolla",
    anio : 2022,
    color : "negro",
    
    describir : function () {
        return `Este auto es un ${this.marca} ${this.modelo} del anio ${this.anio} de color ${this.color}`
    }
}
console.log(auto.describir());

// Acceder a las propiedad una por una
console.log(auto.marca);
console.log(auto.modelo);
console.log(auto.anio);
console.log(auto.color);