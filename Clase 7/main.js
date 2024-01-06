//OPERADORES AVANZADOS
//operador ++

// let numero = 8;
// numero = numero + 1;
// numero += 1;
// numero++;

//operador ternario
/* 
estructura del operador ternario

condicion ? codigo cuando condicion verdadera : codigo cuando condicion falsa;
*/
// let edad = 20;

// if(edad >= 18){
//   console.log("Eres mayor de edad");
// }else{
//   console.log("no eres mayor de edad");
// }

// edad >= 18 ? console.log("Eres mayor de edad") : console.log("no eres mayor de edad");

// let temperatura = 20;

// if (temperatura > 30) {
//   console.log("Día caluroso");
// } else {
//   console.log("Día agradable");
// }

// temperatura > 30 ? console.log("Día caluroso") : console.log("Día agradable");

// let permiso;
// const usuario = {
//   nombre: "juan",
//   edad: 18,
// };

// if (usuario.edad >= 18) {
//   permiso = true;
// } else {
//   permiso = false;
// }

// if (permiso) {
//   console.log("Puedes entrar a la fiesta");
// } else {
//   console.log("No puedes entrar a la fiesta");
// }

// const usuario = {
//   nombre: "juan",
//   edad: 25,
// };

// let permiso = usuario.edad >= 18 ? true : false;
// permiso
//   ? console.log("Puedes entrar a la fiesta")
//   : console.log("No puedes entrar a la fiesta");

/* 
operador1 && operador2 retorna operador1 si este es falso, en caso contrario retorna operador2

si operador1 verdadero entonces operador2


operador1 || operador2 retorna operador1 si este es verdadero, en caso contrario retorna operador2

si operador1 es verdadero entonces operador1
*/

// const carrito = [];

// if (carrito.length === 0) {
//   console.log("El carrito está vacío");
// }

// carrito.length === 0 && console.log("El carrito está vacío");

// const usuario = {
//   nombre: "John",
//   edad: 20,
// };

// const registro = usuario.edad >= 18 && new Date();
// console.log(registro);

// console.log(0 || "Falsy"); //falsy
// console.log(40 || "Falsy"); //40
// console.log(null || "Falsy"); //falsy
// console.log(undefined || "Falsy"); //falsy
// console.log("Hola Mundo" || "Falsy"); //Hola Mundo
// console.log("" || "Falsy"); //falsy
// console.log(NaN || "Falsy");  //falsy
// console.log(true || "Falsy"); //true
// console.log(false || "Falsy"); //falsy

// const usuario = {
//   nombre: "John",
//   edad: 20,
// };

// const usuario1 = null;

// console.log(usuario || "El usuario no existe");
// console.log(usuario1 || "El usuario no existe");

// let carrito;
// let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

// if (carritoStorage) {
//   carrito = carritoStorage;
// } else {
//   carrito = [];
// }

// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//ACCESO CONDICIONAL A UN OBJETO

// const usuario = null;

// console.log(usuario?.nombre || "El usuario no existe");

// const usuario1 = { nombre: "andres", edad: 27 };
// console.log(usuario1?.nombre || "El usuario no existe");

// const usuario1 = {
//   nombre: "andres",
//   edad: 27,
//   cursos: { javascript: "aprobado" },
// };

// console.log(usuario1?.cursos?.javascript || "La propiedad no existe");
// console.log(usuario1?.cursos?.react || "La propiedad no existe");

//DESESTRUCTURACIÓN
// const usuario = {
//   nombre: "juan",
//   edad: 45,
//   direccion: "AAV",
//   cabello: "rojo",
// };

// let nombre = usuario.nombre;
// let edad = usuario.edad;
// console.log(nombre);
// console.log(edad);
// let { nombre, edad, direccion, cabello } = usuario;

// console.log(nombre);
// console.log(edad);
// console.log(cabello);

// const usuario = {
//   nombre: "juan",
//   edad: 45,
//   direccion: "AAV",
//   cabello: "rojo",
//   telefono: {
//     cel: 113334444,
//     casa: null,
//     trabajo: 113325555,
//   },
// };

// const {
//   nombre,
//   edad,
//   telefono: { trabajo },
// } = usuario;

// console.log(trabajo, nombre, edad);

// const usuario = {
//   nombre: "juan",
//   edad: 45,
//   direccion: "AAV",
//   cabello: "rojo",
//   telefono: {
//     cel: 113334444,
//     casa: null,
//     trabajo: 113325555,
//   },
// };

// const {
//   nombre: nombrePersona,
//   edad: edadPersona,
//   telefono: { trabajo: numeroTrabajo },
// } = usuario;

// console.log(numeroTrabajo, nombrePersona, edadPersona);

// const desestructurar = ({ nombre, edad, direccion }) => {
//   console.log(nombre, edad, direccion);
// };

// const usuario = { nombre: "pepito", edad: 54, direccion: "AV1" };
// desestructurar(usuario);

// const nombres = ["Juan", "Julieta", "Carlos", "Mariela"];

// const [a, c, b] = nombres;
// console.log(a, b, c);

// const usuario = {
//   nombre: "juan",
//   edad: 45,
//   direccion: "AAV",
//   cabello: "rojo",
//   telefono: {
//     cel: {
//       cel1: 1234,
//       cel2: 6498,
//     },
//     casa: {
//       casa1: 54,
//       casa2: 786,
//     },
//     trabajo: {
//       trabajo1: 89,
//       trabajo2: 158515,
//     },
//   },
// };

// const {
//   nombre: nombrePersona,
//   edad: edadPersona,
//   telefono: {
//     cel: { cel1: celularCasa },
//     casa: { casa1: telefonoCasa },
//     trabajo: { trabajo1: telefonoTrabajo },
//   },
// } = usuario;

// console.log(celularCasa, telefonoCasa, telefonoTrabajo);

// const nombres = ["juan", "pedro", "matias"];
// console.log(...nombres);
// console.log(nombres.join(" "));

// const numeros = [4, 4, 5, 7, 8, 7];
// console.log(Math.min(...numeros));
// console.log(Math.max(...numeros));

//paso por valor
// let nombre1 = "andres";
// let nombre2 = nombre1;

// nombre2 = "juan";
// console.log(nombre1);

//paso referencia
// let persona1 = { nombre: "andres", edad: 56 };
// let persona2 = {...persona1};
// persona2.nombre = "juan";

// console.log(persona1);

// const usuario = { nombre: "pepito", edad: 54, direccion: "AV1" };
// const usuario1 = {
//   ...usuario,
//   nombre: "juan",
//   cabello: "rojo",
// };

// console.log(usuario1);

const sumar = (...numeros) => {
  console.log(numeros.reduce((acum, item) => acum + item, 0));
};

sumar(4, 5, 67, 8, 9, 6, 54, 33);
sumar(4, 5, 67);
