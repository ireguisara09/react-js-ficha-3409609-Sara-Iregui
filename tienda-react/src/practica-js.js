// Reto 1: Funciones, parametros, return

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

// Reto 2: Funciones flecha 

console.log("======== FUNCIONES FLECHAS ========")

// Tradicional
/*function aplicarIva(precio) {
return precio * 1.19;
}*/

// Flecha 

/*const aplicarIva = (precio) => {
return precio * 1.19;
};*/


// Flecha corta 

/*const aplicarIva = precio => precio * 1.19;*/

// Convertir cuadrado(numero) a arrow function.

// Tradicional
/*function cuadrado(numero) {
    const cuadrado = numero * numero
    return cuadrado;
}
const resultado6 = cuadrado(2)
console.log("El resultado de la funcion tradicional es : ")
console.log(resultado6);*/

// Funcion flecha 

const cuadrado = (numero) => {
    return numero * numero;
}

const resultado6 = cuadrado(2)
console.log("El resultado de la funcion flecha es: "+ resultado6); 

// Convertir esMayorEdad(edad) a arrow function.

// Tradicional
/*function esMayorEdad(edad) {
    const mayor = edad
    if  (mayor  >= 18) {
        console.log("Usted es mayor de edad")
    }else{
        console.log("Usted es menor de edad")
    }
}
const resultado7 = esMayorEdad(13)
console.log(resultado7);*/

// Funcion flecha 

const esMayorEdad = (edad) => {
     const mayor = edad
    if  (mayor  >= 18) {
        console.log("Usted es mayor de edad")
    }else{
        console.log("Usted es menor de edad")
    }
}

const resultado7 = esMayorEdad(19)
console.log(resultado7);

// Crear nombreCompleto(nombre, apellido) como arrow function.

// Tradicional
/*function nombreCompleto(nombre, apellido) {
    const name = nombre + " " + apellido
    return name; 
}
const resultado8 = nombreCompleto("Sara","Iregui")
console.log("Nombre completo: "+resultado8);*/

// Funcion flecha

const nombreCompleto = (nombre, apellido) => {
    const name = nombre + " " + apellido
    return name; 
}
const resultado8 = nombreCompleto("Sara","Iregui")
console.log("Nombre completo: "+resultado8);

// Reto 3: arreglos y objetos

console.log("======== ARREGLOS Y OBJETOS =======")

const productos = [
    { id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
    { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
    { id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
    { id: 4, nombre: 'Audifonos', precio: 120000, categoria: 'Audio', stock: 8 },
    { id: 5, nombre: 'Webcam', precio: 180000, categoria: 'Perifericos', stock: 4 },
    { id: 6, nombre: 'Parlantes', precio: 150000, categoria: 'Audio', stock: 0 },
    { id: 7, nombre: 'Laptop', precio: 2500000, categoria: 'Computadores', stock: 2 },
    { id: 8, nombre: 'Memoria USB', precio: 35000, categoria: 'Almacenamiento', stock: 10 },
    { id: 9, nombre: 'Disco SSD', precio: 320000, categoria: 'Almacenamiento', stock: 0 },
    { id: 10, nombre: 'Tablet', precio: 850000, categoria: 'Dispositivos', stock: 6 }
];

console.log(productos);