/* 
estructura de una funcion

function nombreFuncion(){
  código a ejecutar por la función
}

nombreFuncion();
*/

// function saludar() {
//   console.log("Hola a todos");
// }

// saludar();

// function saludar() {
//   let apellido = prompt("ingrese su apellido");
//   alert(`Hola ${apellido}`);
// }

// saludar();
// saludar();
// saludar();
// saludar();
// saludar();
// saludar();
// saludar();
// saludar();
// saludar();
// saludar();
// saludar();

/* 
estructura de una función con parámetros

function nombreFuncion(parm1, parm2, ..., parmn){
  código a ejecutar por la función
}

nombreFuncion(valor1, valor2, ..., valorn);
*/

// function saludar(saludo, nombre){
//   console.log(`${saludo} ${nombre}`);
// }

// saludar("Hola", "andres");
// saludar("Bienvenida", "sofia");

// function sumar(numeroUno, numeroDos) {
//   return numeroUno + numeroDos;
// }

// let resultado = sumar(5, 6);
// console.log("resultado", resultado);

// function maquinaProductos(codigo) {
//   switch (codigo) {
//     case 1:
//       return "papitas";
//       break;

//     case 2:
//       return "galletas";
//       break;

//     default:
//       return "Codigo no encontrado";
//       break;
//   }
// }

// let producto = maquinaProductos(1);
// console.log(producto);

// function saludar() {
//   console.log("Hola");
//   return;
//   console.log("Chao");
// }

// saludar();

// function calcularResultado(numeroUno, numeroDos, operacion) {
//   switch (operacion) {
//     case "+":
//       return numeroUno + numeroDos;
//     case "-":
//       return numeroUno - numeroDos;
//     case "*":
//       return numeroUno * numeroDos;
//     case "/":
//       return numeroUno / numeroDos;
//     default:
//       return "Operación  no definida";
//   }
// }

// let numeroUno = Number(prompt("Ingrese el primer número"));
// let numeroDos = Number(prompt("Ingrese el segundo número"));
// let operacion = prompt("Ingrese la operacion");

// let resultado = calcularResultado(numeroUno, numeroDos, operacion);
// alert(`${numeroUno} ${operacion} ${numeroDos} = ${resultado}`);

// let resultado;

// function sumar(numeroUno, numeroDos) {
//   let resultado = numeroUno + numeroDos;
//   console.log(resultado);
// }

// sumar(5, 6);

// {
//   let edad = 6;
// }

// console.log(edad);

// let nombre = "John";

// function saludar() {
//   let nombre = "juan";
//   console.log(nombre);
// }

// saludar();
// console.log(nombre);

// function sumar(x, y) {
//   let resultado = x + y;
//   return resultado;
// }

// function restar(x, y) {
//   let resultado = x - y;
//   return resultado;
// }

// function sumar(x, y) {
//   return x + y;
// }

// const sumar = function (x, y) {
//   return x + y;
// };

// const sumar = (x, y) => {
//   return x + y;
// };

// cuando la funcion no tiene parametros tenemos que dejar los paréntesis vacíos
// cuando la funcion solo tiene un parametro los paréntesis son opcionales
// cuando quitamos las llaves y el return la función retorna implicitamente

// const saludar = () => {
//   return "Hola";
// };

// console.log(saludar());

// const saludar = nombre => {
//   return `Hola ${nombre}`;
// };

// console.log(saludar("andres"));

// const sumar = (x, y) => x + y; //arrow function
// console.log(sumar(6, 5));
// console.log(sumar(20, 5));

// const suma = (numero1, numero2) => numero1 + numero2;
// const resta = (numero1, numero2) => numero1 - numero2;

// const iva = (precio) => precio * 0.21;
// let precioProduto = 1000;
// let descuento = 100;

// //precio + iva - descuento
// let nuevoPrecio = resta(suma(precioProduto, iva(precioProduto)), descuento);
//                 // = resta(suma(1000, iva(1000)), 100);
//                 // = resta(suma(1000, 210), 100);
//                 // = resta(1210, 100);
//                 // = 1110
// console.log(nuevoPrecio);


const calcularResultado = (numeroUno, numeroDos, operacion) => {
  switch (operacion) {
    case "+":
      return numeroUno + numeroDos;
    case "-":
      return numeroUno - numeroDos;
    case "*":
      return numeroUno * numeroDos;
    case "/":
      return numeroUno / numeroDos;
    default:
      return "Operación  no definida";
  }
}

let numeroUno = Number(prompt("Ingrese el primer número"));
let numeroDos = Number(prompt("Ingrese el segundo número"));
let operacion = prompt("Ingrese la operacion");

let resultado = calcularResultado(numeroUno, numeroDos, operacion);
alert(`${numeroUno} ${operacion} ${numeroDos} = ${resultado}`);