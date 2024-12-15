// Ejercicio 2: Eliminar al último invitado
// Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"].
// El último invitado no puede asistir. Elimina al último invitado y muestra
// quién fue eliminado y el estado actualizado de la lista.

let invitadosFiesta = ["Ana", "Juan", "Carlos", "Sofía"];
console.log("Inicialmente estas personas iban asistir a la fiesta:", invitadosFiesta);
// Resultado: Inicialmente estas personas iban asistir a la fiesta: [ 'Ana', 'Juan', 'Carlos', 'Sofía' ]

let personasNoAsistencia = invitadosFiesta.pop();
console.log("La siguiente persona no asistira a la fiesta: ", personasNoAsistencia);
// Resultado: La siguiente persona no asistira a la fiesta:  Sofía
console.log("Las siguientes personas asistiran a la fiesta: ", invitadosFiesta);
// Resultado: Las siguientes personas asistiran a la fiesta:  [ 'Ana', 'Juan', 'Carlos' ]