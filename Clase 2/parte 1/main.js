/* 
variables de tipo booleano

let valor1 = true;
let valor2 = false;

todos los elementos del lenguaje tienen un valor asociado

Boolean(-1) => true
Boolean(0) => false
Boolean("") => false
Boolean("andres") => true

= asignación para agregar o asignar un valor a una variable
== comparación solo de valor
=== comparación tanto de valor como de tipo de dato
*/

/* 
estructura del condicional if

if(condicion o valor true/false){
  código a ejecutar cuando la condición o el valor sea verdadero
}
*/

// if(0){
//   console.log("Hola");
// }

// console.log("proceso finalizado");

// if(-20){
//   console.log("Hola");
// }

// console.log("proceso finalizado");

// if(""){
//   console.log("Hola");
// }

// console.log("proceso finalizado");

// if("andres"){
//   console.log("Hola");
// }

// console.log("proceso finalizado");

// let nombre = prompt("Ingrese el nombre");

// if (nombre === "pepito") {
//   alert("Bienvenido pepito");
// }

/* 
estructura del condicional if else

if(condicion){
  código a ejecutar cuando la condición es verdadera
}else{
  código a ejecutar cuando la condición es falsa
}
*/

// let respuesta = prompt("Terminaste la tarea?").toLowerCase();

// if (respuesta === "si") {
//   alert("Puedes salir a jugar");
// } else {
//   alert("No puedes salir a jugar");
// }

/* 
estructura del if else if

if(condicion1){
  código a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
  código a ejecutar cuando la condicion2 es verdadera
}else if(condicion3){
  código a ejecutar cuando la condicion3 es verdadera
}else{
  código a ejecutar cuando ninguna de las condiciones anteriores es verdadera
}
*/

// let respuesta = prompt("terminaste la tarea?").toLocaleLowerCase();

// if (respuesta === "si") {
//   alert("Puedes salir a jugar");
// } else if (respuesta === "no") {
//   alert("No puedes salir a jugar");
// } else {
//   alert("Opción incorrecta (si/no)");
// }

// let edad = 6;
// let resultado = edad > 10;

// console.log(resultado);

/* 
valor1 && valor2 es verdadero cuando ambos valores son verdaderos, en caso contrario es falso
valor1 || valor2 es verdadero cuando al menos uno de los valores es verdadero, en caso contrario es falso
*/

// let nombre = prompt("Ingrese el nombre");
// let apellido = prompt("Ingrese el apellido");

// if (nombre != "" && apellido != "") {
//   alert("Nombre: " + nombre + " apellido: " + apellido);
// } else {
//   alert("Nombre y apellido obligatorio");
// }

// let nombre = prompt("Ingrese el nombre");

// if (nombre === "ANA" || nombre === "ana") {
//   alert("Hola ana");
// } else {
//   alert("no eres ana");
// }

// let nombre = prompt("Ingrese el nombre");

// if (nombre != "" && (nombre === "EMA" || nombre === "ema")) {
//   alert("Hola Ema");
// } else {
//   alert("Ingresar nombre válido");
// }

// let nombre = prompt("Ingrese el nombre").toLowerCase();

// if (nombre != "" && nombre === "ema") {
//   alert("Hola Ema");
// } else {
//   alert("Ingresar nombre válido");
// }
