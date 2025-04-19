// Definicimos una función que realiza una función matematica
export default function calculate(op: "sumar" | "restar", a: number, b: number): number {
    return op === "sumar" ? a + b : a - b
}