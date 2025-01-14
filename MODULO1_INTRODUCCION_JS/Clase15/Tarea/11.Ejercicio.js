// Gestión de inventario de una tienda
// Eres encargado de una tienda y tienes un inventario inicial de productos.
// La lista de productos es:
// let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
// Debes realizar las siguientes acciones:
// 1. Agregar un nuevo producto "Impresora" al inventario usando el
// método adecuado.
// 2. Comprobar si "Tablet" está en el inventario y mostrar un mensaje
// adecuado.
// 3. Eliminar el primer producto del inventario.
// 4. Mostrar la lista actualizada de productos en una sola cadena,
// separados por comas.

let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
console.log("Se encuentran los siguientes dispositivos al inicio del inventario", inventario);
// Resultado: Se encuentran los siguientes dispositivos al inicio del inventario [ 'Laptop', 'Teclado', 'Mouse', 'Monitor' ]
// Agregar un nuevo producto "Impresora" al inventario
inventario.push("Tablet");
console.log("Se agregaron nuevos dispositivos al inventario", inventario);
// Resultado: Se agregaron nuevos dispositivos al inventario [ 'Laptop', 'Teclado', 'Mouse', 'Monitor', 'Tablet' ]
// Comprobar si "Tablet" esta en el inventario
let tablet = inventario.includes("Tablet");
console.log("¿En el inventario se encuentra una tablet?", tablet);
// Resultado: ¿En el inventario se encuentra una tablet? true
// Mostrar la lista separadas en una sola cadena, separados por comas

let listaActualizada = inventario.join(", ");
console.log("Array unido con join ( , ): ", listaActualizada);
// Resultado: Array unido con join ( , ):  Laptop, Teclado, Mouse, Monitor, Tablet

