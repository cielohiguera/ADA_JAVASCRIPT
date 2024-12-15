// Ejercicio 7: Filtra nombres que empiecen con la letra 'A'
// Dada una lista de nombres ['Ana', 'Luis', 'Andrea', 'María'], queremos
// quedarnos solo con los nombres que comiencen con la letra 'A'. Por
// ejemplo, el nombre 'Luis' no debería estar en el resultado porque empieza
// con 'L'.

let names =  ['Ana', 'Luis', 'Andrea', 'María'];

let namesWithA = names.filter(name => name.startsWith('A'));
console.log(namesWithA); // Resultado [ 'Ana', 'Andrea' ]