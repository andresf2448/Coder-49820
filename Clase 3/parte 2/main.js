/* 
estructura de un objeto

{clave1: valor1, clave2: valor2, ..., claven: valorn};
*/

// const nombre = "juan";
// const edad = 54;
// const direccion = "AV";

// const persona = { nombre: "juan", edad: 54, direccion: "AV" };

// let clave = "nombre";
// console.log(persona.clave);
// console.log(persona.edad);
// console.log(persona.direccion);

// let clave = "nombre";
// console.log(persona["nombre"]);
// console.log(persona[clave]);
// console.log(persona["edad"]);
// console.log(persona["direccion"]);

// let clave = prompt("Ingrese la clave a consultar su valor");

// // alert(persona.clave)
// alert(persona[clave])

// const persona = { nombre: "juan", edad: 54, direccion: "AV" };
// persona.nombre = "pepito";
// persona.padre = "pedro";
// persona["edad"] = 56;

// console.log(persona);

// function Persona(nombre, edad) {
//   this.nombre = nombre;
//   this.edad = edad;
// }

// const persona1 = new Persona("andres", 27);
// const persona2 = new Persona("camila", 19);

// console.log(persona1.nombre);
// console.log(persona2.nombre);

// let nombre = prompt("Ingrese el nombre");
// let edad = prompt("Ingrese el edad");

// const person1 = new Persona(nombre, edad);

// {
//   nombre: "pedro",
//   edad: 54,
// }

// function Persona(info) {
//   this.nombre = info.nombre;
//   this.edad = info.edad;
//   this.direccion = info.direccion;
//   this.padre = info.padre;
//   this.madre = info.madre;
// }

// const persona1 = new Persona({
//   nombre: "pepito",
//   edad: 54,
//   direccion: "AV",
//   padre: "pedrito",
//   madre: "juanita",
// });

// const producto1 = {
//   nombre: "camisa",
//   precio: 100
// }
// let nombreProducto1 = "camisa";
// let precioProducto1 = 123;
// let nombreProducto2 = "pantalon";
// let precioProducto2 = 1234;

// function Persona(nombre, edad) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.hablar = function () {
//     console.log(`Hola soy ${this.nombre}`);
//   };
// }

// const persona = new Persona("carlos", 54);
// persona.hablar();

// function Persona(nombre, edad) {
//   this.nombre = nombre;
//   this.edad = edad;
// }
// const persona = new Persona("carlos", 54);

// for (const clave in persona) {
//   console.log(clave);
//   console.log("valor asociado", persona[clave]);
// }

// function Persona(nombre, edad) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.hablar = function () {
//     console.log(`Hola soy ${this.nombre}`);
//   };
// }

// const persona = new Persona("carlos", 54);
// persona.hablar();

// class Persona {
//   constructor(nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;
//   }

//   hablar(){
//     console.log(`Hola soy ${this.nombre}`);
//   }
// }

// const persona = new Persona("carlos", 54);
// persona.hablar();

// class Producto {
//   constructor(nombre, precio, imagen) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.imagen = imagen;
//   }
// }

// const producto1 = new Producto(
//   "RECOMENDADO Monitor Curvo 27 Fhd Diseño Sin ...",
//   739900,
//   "httpasdfkjhds"
// )

// const producto2 = new Producto(
//   "RECOMENDADO Monitor Led De 24 Con Panel Ips Y Diseño",
//   739900,
//   "http://sdkfhu"
// )

// class Producto {
//   constructor(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.vendido = false;
//   }

//   vender() {
//     this.vendido = true;
//   }
// }

// const producto = new Producto("camisa", 1000);
// console.log(producto);
// producto.vender();
// console.log(producto);

class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  //this.cantidad = this.cantidad - 1
  vender() {
    this.cantidad -= 1;
  }
}

// const producto = new Producto("camisa", 1000, 5);
// console.log(producto);
// producto.vender();
// console.log(producto);
// producto.vender();
// console.log(producto);

for(let i = 0; i < 5; i++){
  let nombre = prompt("Imngrese el nombre del producto")
  let precio = prompt("Imngrese el precio del producto")
  const producto = new Producto(nombre, precio, 5);
  console.log(producto);
}

// const producto1 = new Producto("camisa", 1000)
// const producto2 = new Producto("camisa", 1000)
// const producto3 = new Producto("camisa", 1000)
// const producto4 = new Producto("camisa", 1000)

// const persona = { nombre: "camila", edad: 19, madre: "liliana" };
// console.log(persona["madre"]);
// for (const clave in persona) {
//   if (clave === "madre") {
//     console.log(clave);
//     console.log(persona[clave]);
//   }
// }

// clave = "nombre", "edad"

// class Telefono{
//   constructor(nombre, marca, precio){
//     this.nombre = nombre;
//     this.marca = marca;
//     this.precio = precio;
//   }

//   llamar(){
//     console.log(`Yo ${this.nombre} estoy llamando`);
//   }
// }

// const telefono = new Telefono("xiaomi", "asdg", 1000);
