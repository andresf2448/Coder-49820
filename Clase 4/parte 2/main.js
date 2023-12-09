//funciones de alto orden
//retornar funciones

// function mayorQue(n) {
//   return (m) => m > n;
// }

// let mayorQueCinco = mayorQue(5); //(m) => m > 5;
// console.log(mayorQueCinco(6));
// console.log(mayorQueCinco(4));

// let mayorQueDiez = mayorQue(10); //(m) => m > 10;
// console.log(mayorQueDiez(5));
// console.log(mayorQueDiez(11));

// const generarOperacion = (operacion) => {
//   if (operacion === "sumar") {
//     return (x, y) => x + y;
//   }

//   if (operacion === "restar") {
//     return (x, y) => x - y;
//   }

//   if (operacion === "multiplicar") {
//     return (x, y) => x * y;
//   }

//   if (operacion === "dividir") {
//     return (x, y) => x / y;
//   }
// };

// const sumar = generarOperacion("sumar");
// console.log(sumar(5, 6));

// const iterador = (arreglo, funcion) => {
//   for (const iterator of arreglo) {
//     funcion(iterator);
//   }
// };

// iterador([4, 5, 6, 8, 9], console.log);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 700 },
//   { id: 3, nombre: "zapato", precio: 785 },
//   { id: 4, nombre: "media", precio: 300 },
// ];

//forEach recorre cada uno de los elementos del arreglo
// productos.forEach(item => {
//   console.log(item.nombre);
//   console.log(item.precio);
// });

//find encuentra el primer elemento que cumpla la condición
// let nombre = prompt("Ingrese el producto a consultar");
// const producto = productos.find((item) => item.nombre === nombre);

// if (producto) {
//   alert(
//     `
//       Id: ${producto.id}
//       Nombre: ${producto.nombre}
//       Precio: $${producto.precio}
//     `
//   );
// } else {
//   alert("Producto no encontrado");
// }

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 700 },
//   { id: 3, nombre: "zapato", precio: 785 },
//   { id: 4, nombre: "media", precio: 300 },
// ];

//filter encontrar todos los elementos que cumplan la condición
// let precio = Number(prompt("Ingrese el precio mínimo del producto"));
// const encontrados = productos.filter(item => item.precio > precio);

// encontrados.forEach(item => {
//   alert(
//     `
//       Id: ${item.id}
//       Nombre: ${item.nombre}
//       Precio: $${item.precio}
//     `
//   );
// })

//some valida si existe al menos un elemento que cumple la condición
// console.log(productos.some((item) => item.nombre === "camisa"));

// let nombre = prompt(
//   "Ingrese el nombre del producto para buscar disponibilidad"
// );

// if (productos.some((item) => item.nombre === nombre)) {
//   alert("Producto disponible");
// } else {
//   alert("Producto no disponible");
// }

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 700 },
//   { id: 3, nombre: "zapato", precio: 785 },
//   { id: 4, nombre: "media", precio: 300 },
// ];

// //map modifica o transforma el arreglo
// let nombres = productos.map((item) => item.nombre);
// console.log(nombres);

// let precios = productos.map((item) => item.precio);
// console.log(precios);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 700 },
//   { id: 3, nombre: "zapato", precio: 785 },
//   { id: 4, nombre: "media", precio: 300 },
// ];

// let nombre = "gorra";
// let productoEncontrado;

// for (let i = 0; i < productos.length; i++) {
//   let item = productos[i];

//   if (item.nombre === nombre) {
//     productoEncontrado = item;
//   }
// }

// console.log(productoEncontrado);

// let encontrados = [];

// let precio = 500;

// for (let i = 0; i < productos.length; i++) {
//   let item = productos[i];

//   if (item.precio > precio) {
//     encontrados.push(item);
//   }
// }

// console.log(encontrados);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 700 },
//   { id: 3, nombre: "zapato", precio: 785 },
//   { id: 4, nombre: "media", precio: 300 },
// ];

// const nuevosPrecios = productos.map((item) => {
//   return {
//     id: item.id,
//     nombre: item.nombre,
//     precio: item.precio - item.precio * 0.21,
//   };
// });

// console.log(nuevosPrecios);

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "gorra", precio: 700 },
  { id: 3, nombre: "zapato", precio: 785 },
  { id: 4, nombre: "media", precio: 300 },
];

//reduce reduce un arreglo a un único valor
// const numeros = [4, 5, 6, 7, 8];

// let total = numeros.reduce((acum, item) => acum + item, 0);
// console.log(total);

// let total = productos.reduce((acum, item) => acum + item.precio, 0);
// console.log(total);

// const numeros = [ 40, 1, 5, 200 ];
// console.log(numeros.sort((a, b) => a - b));  // [ 1, 5, 40, 200 ]
// console.log(numeros.sort((a, b) => b - a));  // [ 200, 40, 5, 1 ]

const items = [
  { nombre: "Pikachu", price: 21 },
  { nombre: "Charmander", price: 37 },
  { nombre: "Pidgey", price: 45 },
  { nombre: "Squirtle", price: 60 },
];

console.log(items.sort((a, b) => {
  if (a.nombre > b.nombre) {
    return 1;
  }
  if (a.nombre < b.nombre) {
    return -1;
  }
  // a es igual a b
  return 0;
}));
