// Ejercicio 3: Agregar y eliminar a la fila de mascotas
// Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato",
// "Conejo"]. Llega un "Hámster" que debe ser atendido primero. Agrega el
// "Hámster" al inicio de la lista. Luego, atiende a la primera mascota de la
// fila y muéstrala. Finalmente, muestra la lista actualizada.

let mascotasVeterinaria = ["Perro", "Gato", "Conejo"];
console.log("Las siguientes mascotas se encuentran en la veterinaria", mascotasVeterinaria);
// Las siguientes mascotas se encuentran en la veterinaria [ 'Perro', 'Gato', 'Conejo' ]
mascotasVeterinaria.unshift("Hamster")
console.log("Después llega un Hamster el cual deberá ser atendido con prioridad", mascotasVeterinaria);
// Después llega un Hamster el cual deberá ser atendido con prioridad [ 'Hamster', 'Perro', 'Gato', 'Conejo' ]
let mascotaAtendida = mascotasVeterinaria.shift();
console.log("Mascota atendida:", mascotaAtendida);
console.log("Fila actualizada:", mascotasVeterinaria);