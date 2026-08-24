// Multiplicación

function calcularTotal(precio, cantidad) {
const total = precio * cantidad;
return total;
}
const resultado = calcularTotal(50000, 3);
console.log("El resultado de la multiplicación es: ")
console.log(resultado);

// Suma 

function calcularSuma(a, b) {
    const suma = a + b;
    return suma;
}
const resultado2 = calcularSuma (8, 9);
console.log ("El resultado de la suma es: ")
console.log(resultado2);

// Resta

function calcularresta(c, d){
    const resta = c - d 
    return resta;
}
const resultado3 = calcularresta (2, 4)
console.log("El resultado de la resta es: ")
console.log(resultado3);

// División 

function calcularDivision(e, f){
    const division = e / f
    return division;
}
const resultado4 = calcularDivision(5, 7)
console.log("El resultado de la division: ")
console.log(resultado4);

// Promedio 

function calcularPromedio(nota1, nota2, nota3){
    const promedio = nota1 + nota2 + nota3 / 3
    return promedio;
}
const resultado5 = calcularPromedio(5.0, 3.5, 4.0)
console.log("El promedio de notas es: ")
console.log(resultado5);

// Diferencia entre console.log y return
// console.log = Muestra el valor en pantalla
// return = Devuelve un valor que se puede utilizar luego en otra parte del programa