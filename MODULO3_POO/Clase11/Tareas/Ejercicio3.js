// 3. Ejecución de Múltiples Consultas en Paralelo
// Simulemos un caso donde un sistema necesita realizar varias consultas a
// distintos servicios externos de manera simultánea. Escribe tres funciones que
// simulen una consulta, cada una con un tiempo de respuesta diferente (1, 2 y 3
// segundos). Luego, crea una función que ejecute estas tres consultas en paralelousando Promise.all, de modo que se esperen los tres resultados antes de
// continuar.
// Esta técnica te permitirá comprender cómo hacer más eficientes las operaciones
// asíncronas independientes ejecutándolas en paralelo.

// Primera función donde se realiza una consulta y tarda 1 segundo en acompletarse

const consultaA = () => new Promise(resolve => setTimeout(() => resolve("Consulta A completada"), 1000))

// Segunda consulta
const consultaB = () => new Promise(resolve => setTimeout(() => resolve("Consulta B completada"), 2000))

// Tecera consulta
// Segunda consulta
const consultaC = () => new Promise(resolve => setTimeout(() => resolve("Consulta C completada"), 3000))


// Función prinicipal para ejecutar todas las consultas y se realizará en forma paralela

async function realizarConsultasParalelas() {
    try {
        // Promise.all ejecuta todas las consultas en paralelo y permite que todas
        const resultados = await Promise.all([consultaA(), consultaB(), consultaC()]);
        console.log("Todas las consultas completadas:", resultados);
    } catch (error) {
        console.error("Error en alguna consulta", error);
        
    }
}

realizarConsultasParalelas(); // Inicia la ejecución de las consultas