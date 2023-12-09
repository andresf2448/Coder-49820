/* 
estructura de un arreglo

[valor1, valor2, ..., valorn];
*/

// const vacio = [];
// const numeros = [1, 2, 3, 4, 5, 6];
// const nombres = ["Andres", "Camila", "Luis", "Juan"];
// const valores = [true, false, false, true];
// const varios = [1, "andres", true];

// console.log(nombres);

// const nombres = ["Andres", "Camila", "Luis", "Juan"];
// console.log(nombres[1]);

// const numeros = [1, 2, 3, 4, 5, 6];
// console.log(numeros[0] + numeros[4]);

// const nombres = ["Andres", "Camila", "Luis", "Juan"];

// for (let i = 0; i < 4; i++) {
//   console.log(nombres[i]);
// }

// const productos = ["galleta", "cafe", "mate", "leche", "fideos", "chocolate"];

// for (let i = 0; i < productos.length; i++) {
//   console.log(`Veo producto ${productos[i]} lo busco y lo agrego al carrito`);
// }

// console.log(`Veo producto ${productos[0]} lo busco y lo agrego al carrito`);

// const productos = ["galleta", "cafe", "mate", "leche", "fideos", "chocolate"];

// console.log(productos.length); // Longitud o cantidad de elementos en el arreglo
// productos.push("azucar"); //agregar un elemento al final del arreglo

// console.log(productos);

// productos.unshift("mermelada"); //agregar al inicio del arreglo
// console.log(productos);

// productos.pop(); //saca un elemento del final del arreglo
// console.log(productos);

// productos.shift(); // sacamos un elemento del inicio
// console.log(productos);

// const productos = ["galleta", "cafe", "mate", "leche", "fideos", "chocolate"];

// const copia = productos.slice(1, 5); // una copia de un fragmento del arreglo
// console.log(copia);

// productos.splice(1, 2); //elimina varios elementos del arreglo
// console.log(productos);

// productos.splice(3, 1);
// console.log(productos);

// productos.splice(1, 0, "mantequilla");
// console.log(productos);

// const productos = ["galleta", "cafe", "mate", "leche", "fideos", "chocolate"];

// console.log(productos.join("****")); // une los elementos del arreglo en un string separado por el parametro pasado

// const personas = ["pepito", "carlitos", "pepita"];
// const varios = productos.concat(personas);

// console.log(varios);

// console.log(productos.indexOf("cafe")); // busca la posicion del elemento pasado por parámetro
// console.log(productos.indexOf("camisa"));// devuelve -1 porque no ha encontrado el elemento

// console.log(productos.includes("mate")); //devuelve true o false dependiendo si encuentra o no el producto
// console.log(productos.includes("camisa"));

// const productos = ["galleta", "cafe", "mate", "leche", "fideos", "chocolate"];

// let nombre = prompt("Ingrese el nombre del producto a buscar");

// while (nombre != "salir") {
//   if (productos.includes(nombre)) {
//     alert("Producto disponible");
//   } else {
//     alert("Producto no disponible");
//   }

//   nombre = prompt("Ingrese el nombre del producto a buscar");
// }

// const productos = ["galleta", "cafe", "mate", "leche", "fideos", "chocolate"];
// productos.reverse();

// console.log(productos);

const productos = ["galleta", "cafe", "mate", "leche", "fideos", "chocolate"];

const eliminarPorNombre = (nombre) => {
  let indice = productos.indexOf(nombre);

  if (indice != -1) {
    productos.splice(indice, 1);
    console.log(productos);
  }
};

eliminarPorNombre("leche");

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 700 },
//   { id: 3, nombre: "zapato", precio: 350 },
//   { id: 4, nombre: "media", precio: 987 },
// ];

// let productoEncontrado;
// for (const iterator of productos) {
//   if (iterator.nombre === "pantalon") {
//     productoEncontrado = iterator;
//   }
// }

// if (productoEncontrado) {
//   console.log("Producto Encontrado");
// } else {
//   console.log("Producto no encontrado");
// }
