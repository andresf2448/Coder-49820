/* 
estructura del bucle for

for(desde; hasta; actualizacion){
  código a repetir
}
*/

//i++    i = i + 1
// for(let i = 0; i < 100; i++){
//   console.log(i);
// }

// for(let i = 0; i < 100; i--){ CUIDADO BUCLE INFINITO
//   console.log(i);
// }

// let numero = Number(prompt("Ingrese el número a multiplicar"));

// for (let i = 1; i <= 10; i++) {
//   let resultado = numero * i;
//   // alert(numero + " x " + i + " = " + resultado);
//   alert(`${numero} x ${i} = ${resultado}`);
// }

// console.log(5 * 1);
// console.log(5 * 2);
// console.log(5 * 3);
// console.log(5 * 4);
// console.log(5 * 5);
// console.log(5 * 6);
// console.log(5 * 7);
// console.log(5 * 8);
// console.log(5 * 9);
// console.log(5 * 10);

// let saludo = "Hola";
// let nombre = "pepito";

// console.log(saludo + " " + nombre);
// console.log(`${saludo} ${nombre}`);

// for (let turno = 1; turno <= 7; turno++) {
//   let nombre = prompt("Ingrese el nombre");
//   alert(`Nombre: ${nombre} Turno: #${turno}`);
// }

// let numero = 5;
// numero += 4; // numero = numero + 4

// let mensaje = "";

// for (let turno = 1; turno <= 7; turno++) {
//   let nombre = prompt("Ingrese el nombre");
//   mensaje += `
//   Nombre: ${nombre} Turno: #${turno}
//   `;
// }

// alert(mensaje);

// let mensaje = "andres";
// mensaje = "jaime"

// const mensaje = "andres";
// mensaje = "jaime"

// for(let i = 0; i < 10; i++){
//   if(i === 5){
//     break;
//   }

//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   if(i === 5){
//     continue;
//   }

//   console.log(i);
// }

/* 
estructura del while

while(condicion){
  codigo a repetir siempre que la condición sea verdadera
}
*/
// let repetir = true;

// while (repetir) {
//   console.log("hola");
// }

// let usuario = prompt("Ingrese el usuario");

// while (usuario != "pepito") {
//   alert("usuario incorrecto");

//   usuario = prompt("Ingrese el usuario");
// }

// alert("Bienvenido");

/* 
estructura del bucle do while
do{
  codigo a ejecutar por primera vez y luego siempre que la condición sea verdadera
}while(condicion)
*/

// let repetir = false;

// while (repetir) { primero piensa luego actua
//   console.log("hola");
// }

// do { primero actua y luego piensa
//   console.log("Hola");
// } while (repetir);

/* 
estructura del switch

switch(valor){
  case valor1:
    codigo a ejecutar cuando el valor es igual a valor1
    break;

  case valor2:
    codigo a ejecutar cuando el valor es igual a valor2
    break;

  .
  .
  .
  default:
    codigo a ejecutar en caso de que valor no coincida con ninguno de los valores
    break;
}
*/

// let moneda = "usd";

// switch (moneda) {
//   case "ars":
//     console.log("Moneda de argentina");
//     break;

//   case "cop":
//     console.log("Moneda de colombia");
//     break;

//   case "clp":
//     console.log("Moneda de chile");
//     break;

//   default:
//     console.log("Moneda no reconocida");
//     break;
// }

let entrada = prompt("Ingrese un nombre");
let fallos = 0;

while (entrada != "ESC") {
  switch (entrada) {
    case "ANA":
      alert("Hola ana");
      break;

    case "JUAN":
      alert("Hola juan");
      break;

    default:
      alert("Quién eres?");
      fallos += 1;
      break;
  }

  if(fallos > 3){
    break;
  }

  entrada = prompt("Ingrese un nombre");
}
