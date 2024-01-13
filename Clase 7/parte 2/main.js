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

// const sumar = (...numeros) => {
//   console.log(numeros.reduce((acum, item) => acum + item, 0));
// };

// sumar(4, 5, 67, 8, 9, 6, 54, 33);

// sumar(4, 5, 67);

//REPASO
/* 
Condicionales
if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}

if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}else{
  codigo a ejecutar cuando la condicion es falsa
}

if(condicion1){
  codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
  codigo a ejecutar cuando la condicion2 es verdadera
}else{
  codigo a ejecutar cuando ninguna de las condiciones es verdadera
}
*/

//bucles
/* 
for

for(desde; hasta; actualizacion){
  codigo a repetir
}

while(condicion){
  codigo a repetir siempre que la condicion sea verdadera
}

do{
  codigo a repetir por primera vez y luego siempre que la condicion sea verdadera
}while(condicion);
*/

// let usuario = prompt("Ingrese el usuario");

// while (usuario != "carlitos") {
//   alert("Usuario incorrecto");
//   usuario = prompt("Ingrese el usuario");
// }

//funciones
/* 
function nombreFuncion(parm1, ..., parmn){
  codigo ejecutar por la funcion
}

nombreFuncion(valor1, valor2, ..., valorn);

const nombreFuncion = (parm1, ..., parmn) => {
  codigo a realizar por la funcion
}

//si la funcion no tiene parametros se deben dejar los parentesis vacios
//si la funcion solo tiene un parametro los parentesis se pueden quitar
//si quitamos las llaves y el return y el codigo es de una sola línea, la arrow function retorna implicitamente
*/

//objetos
/* 
class NombreClase{
  constructor(parm1, ..., parmn){
    this.parm1 = parm1;
    .
    .
    .
    this.parmn = parmn;
  }

  metodo1(parm1, ..., parmn){
    codigo a realizar por el metodo1
  }

  .
  .
  .

  metodom(parm1, ..., parmn){
    codigo a realizar por el metodom
  }
}

const instancia1 = new NombreClase(valor1, ..., valorn);
*/

//arreglo
/* 
[elem1, ..., elemn];

forEach
filter
find
map
*/

//////////////////////////////////////////////////////////
// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "media", precio: 700 },
//   { id: 3, nombre: "gorra", precio: 350 },
//   { id: 4, nombre: "zapato", precio: 1257 },
// ];
// const carrito = [];
// let ver = document.getElementById("mostrar-carrito");
// let contenedor = document.getElementById("contenedor");

// const agregar = (id) => {
//   let producto = productos.find((item) => item.id === id);
//   carrito.push(producto);
//   alert(`
//     Id: ${producto.id}
//     Nombre: ${producto.nombre}
//     $${producto.precio}
//   `);

//   console.log(carrito);
// };

// productos.forEach((item) => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <h2>Id: ${item.id}</h2>
//     <p>Nombre: ${item.nombre}</p>
//     <b>$${item.precio}</b>
//     <button id="boton${item.id}">Agregar</button>
//   `;
//   contenedor.append(div);

//   let boton = document.getElementById(`boton${item.id}`);
//   boton.addEventListener("click", () => agregar(item.id));
// });

// ver.addEventListener("click", () => {
//   carrito.forEach((item) => {
//     let div = document.createElement("div");
//     div.innerHTML = `
//     <h2>Id: ${item.id}</h2>
//     <p>Nombre: ${item.nombre}</p>
//     <b>$${item.precio}</b>
//     <button id="boton${item.id}">Agregar</button>
//   `;
//     document.body.append(div);
//   });
// });

//////////////////////////////////////////////////////////
const productos = [];
let contenedor = document.getElementById("contenedor");

let formulario = document.getElementById("formulario");

const renderizarProductos = (productos) => {
  contenedor.innerHTML = "";
  productos.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
        <h2>Id: ${item.id}</h2>
        <p>Nombre: ${item.nombre}</p>
        <b>$${item.precio}</b>
        <img src="${item.imagen}" />
      `;
    contenedor.append(div);
  });
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;
  let nombre = inputs[0].value;
  let precio = inputs[1].value;

  //Math.max(...productos.map(item => item.id)) + 1
  productos.push({ id: productos.length + 1, nombre, precio });
  renderizarProductos(productos);
});
