// Tipos diferenciados en typescript

// 1. Any: Permite almacenar cualquier tipo de calor sin restricciones
let anyValue: any = 'Hola soy Any'; // String
console.log(anyValue);
anyValue = 42; // Number
console.log(anyValue);
anyValue = {name: "TypeScript"} // Objeto
console.log(anyValue);

// 2. Unkown: Similar a any pero requiere verficación antes de su uso
let unkownValue: unknown = "Hola soy unkown"
console.log(unkownValue);

// 3. Void: Se usa en funciones que no retornan valor
function logMessage(message: string): void {
    console.log(message);
}
logMessage("Esto es una funcion void")

// 4. never
function infiniteBucle(): never {
    while (true) {
        console.log("Este bucle nunca termina")
    }
}
//infiniteBucle()

// 5. Null y Undifined
// let valorNull: string | null = null;
// console.log(valorNull);
// valorNull = 'Ahora tiene un valor'
// console.log(valorNull)