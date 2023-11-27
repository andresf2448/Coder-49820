//number
//string
//boleano

// let nombre = "andres"; //string
// let edad = 54; //number
// let valor = true; //booleano

// let nombre = prompt("Ingrese su nombre");

// if (nombre === "juan") {
//   alert("Hola juan");
// } else {
//   alert("No sé quien eres!");
// }

//Crear un algoritmo que  diga si un número es o no primo
// let numero = Number(prompt("Ingrese el número a verificar si es primo o no"));
// let esPrimo = true;

// for (let i = 2; i < numero; i++) {
//   if (numero % i === 0) {
//     esPrimo = false;
//   }
// }

// if (esPrimo) {
//   alert("El número es primo");
// } else {
//   alert("El número no es primo");
// }

// for (let i = 2; i < 20; i++) {
//   console.log(i);
// }

let edad = prompt("ingrese la edad de su hijo")

switch (edad) {
  case "1":
    alert("Edad acta");
    break;
  case "2":
    alert("Edad acta");
    break;

  case "3":
    alert("Edad acta");
    break;

  case "4":
    alert("Edad acta");
    break;

  default:
    alert("Se sobrepasa la edad permitida para inscribir a su hijo");
    break;
  }