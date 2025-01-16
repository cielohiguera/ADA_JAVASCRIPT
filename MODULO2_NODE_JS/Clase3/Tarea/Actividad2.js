// Actividad 2: Seguimiento de series de televisión
// Consigna: ¡Es hora de organizar tus series favoritas! Crea un programa
// que permita:
// 1. Registrar una serie: Se debe registrar una serie con su nombre y
// la cantidad de temporadas.
// 2. Listar las series: Muestra todas las series registradas.
// 3. Actualizar las temporadas de una serie: Permite actualizar la
// cantidad de temporadas de una serie.
// Pistas:
// • Usa un archivo JSON para almacenar la información de las series.
// • Si el archivo no existe, comienza con un arreglo vacío.
// • ¿Qué es fs.existsSync()?
// • El método fs.existsSync() es parte del módulo fs (file system) en
// Node.js. Este método se usa para comprobar si un archivo o
// directorio existe en el sistema de archivos de manera sincrónica, lo
// que significa que el código se ejecuta y espera a que la operación se
// complete antes de continuar con el siguiente paso.
// • Sintaxis: fs.existsSync(path);

// Paso 1: Importamos

const fs = require('fs')
const filePath = './series.json'

// Paso 2: Funcion para leer series

const leerSeries = () => {
    // Si el archivo no existe, creamos un archivo vacío
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8') // Leemos el archivo
    return JSON.parse(contenido) // Convertimos el contenido en un arreglo de series
}


// Paso 3: Funcion para escribir las series en el archivo

const escribirSeries = (series) => {
    fs.writeFileSync(filePath, JSON.stringify(series, null, 2)) // escribimos las series en el archivo
}

// Paso 4: Función para agregar una nueva serie

const agregarSerie = (nombreSerie, temporada) => {
    const series = leerSeries() // Leer las series existentes
    series.push({id: series.length + 1, nombre : nombreSerie, temporadas : parseInt(temporada)}); // Agregamos la nueva serie
    escribirSeries(series) //Guardamos la lista actualizada
    console.log(`Serie agregada: ${nombreSerie}, temporada: ${temporada}`);
}

// Paso 5: Lista de las series
const listarSeries = () => {
    const series = leerSeries(); // Leemos las series
    console.log('Lista de series favoritas:');
    series.forEach(serie => {
        console.log(`${serie.id}. ${serie.nombre} - ${serie.temporadas} temporadas`);
    });
};

// Paso 6: Actualizar la cantidad de temporadas de una serie

const actualizarSerie = (idSerie, nuevasTemporadas) => {
    const series = leerSeries(); // Leemos las series
    const serie = series.find(s => s.id === idSerie); // Buscamos la serie por su id
    if (serie) {
        serie.temporada = parseInt(nuevasTemporadas); // Actualizamos las temporadas
        escribirSeries(series); // Guardamos la lista actualizada
        console.log(`Serie actualizada: ${serie.nombre}, nuevas temporadas: ${serie.temporada}`);
    } else {
        console.log('Serie no encontrada.');
    }
};

// Ejemplo de uso de funciones

agregarSerie('Friends', 10);
listarSeries();
actualizarSerie(1, 6);
listarSeries();