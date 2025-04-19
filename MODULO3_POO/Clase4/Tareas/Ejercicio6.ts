// Actividad 6: Filtrar elementos de un arreglo genérico usando For...Of y
// Aserciones
// Crea una función genérica llamada filtrarElementos que reciba un arreglo de
// valores mixtos (por ejemplo, number | string | boolean). Usando un bucle for...of,
// filtra solo los valores que sean cadenas de texto (string). Utiliza aserciones de
// tipo para acceder a las propiedades específicas de string.

function filtrarElementos<T>(valores: T[]): string[] {
    const soloStrings: string[] = [];
  
    for (const valor of valores) {
      // Verificamos si es string
      if (typeof valor === "string") {
        // Aserción de tipo: valor como string
        const texto = valor as string;
        // Podríamos usar propiedades específicas del string
        console.log(`Texto: "${texto}", longitud: ${texto.length}`);
        soloStrings.push(texto);
      }
    }
  
    return soloStrings;
  }
  
  const arregloMixto = [123, "hola", true, "mundo", false, "TypeScript"];
  const result = filtrarElementos(arregloMixto);
  console.log("Cadenas filtradas:", result);