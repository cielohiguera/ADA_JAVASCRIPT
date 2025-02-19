// Paso 1: Importamos las versiones de UUID que vamos a usar
const {v1: uuidv1, v3: uuidv3, v4: uuidv4, v5: uuidv5} = require('uuid')

// Ejemplo 1: UUID V1: Basada en tiempo
// Genera un UUID unico basado en la marca del tiempo y la dirección mac
const idvl = uuidv1()
console.log("UUID v1 (Basado el tiempo): ", idvl);

// Ejemplo 2: UUID V3 - Basada en nombre y espacio de nombre
// utiliza un nombre y un espacio de nombre para generar uuids
// usando un hash MD5
const NAMESPACE = uuidv3.URL // Espacio de nombre estandar basado en url
const namev3 = "ejemploNombre" 
const idv3 = uuidv3(namev3, NAMESPACE)
console.log("UUID V3 (Basado en nombre y espacio de nombre)", idv3);

// Ejemplo 3: UUID V4 - Aleatorio
// Genera un uuid aleatorio utilizando valores generados de manera random
const idv4 = uuidv4()
console.log("UUID V4 (Aleatoria): ", idv4);

// Ejemplo 4: UUID V5 - Espacio de nombre y nombre (SHA-1)
// Similar al v3 pero usa sha-1
const namev5 = "OtroEjemplo"
const idv5 = uuidv5(namev5, NAMESPACE)
console.log("UUID V5 (Basado en nombre y espacio de nombre con sha-1): ", idv5)