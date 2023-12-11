//arreglos
//push, pop, forEach, find, filter y map

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "gorra", precio: 100 },
  { id: 3, nombre: "zapato", precio: 1000 },
  { id: 4, nombre: "media", precio: 1000 },
];

// const agregaProducto = (nombre, precio) => {
//   let objeto = {
//     id: productos.length + 1,
//     nombre: nombre,
//     precio: precio,
//   };

//   productos.push(objeto);
// };

// agregaProducto("pantalon", 1000);
// console.log(productos);

// forEach  arreglo.forEach(item => {codigo a realizar con cada item})
productos.forEach((item) => {
  console.log(`Id: ${item.id} Nombre: ${item.nombre} Precio: $${item.precio}`);
});

//find   arreglo.find(item => condicion para encontrar el prodcuto deseado)
const producto = productos.find((item) => item.nombre === "camisa");
console.log(producto);

//filter    arreglo.filter(item => condicion para encontrar todos los productos deseados)
const filtrados = productos.filter((item) => item.precio > 500);
console.log(filtrados);

//map   arreglo.map(item => {return estrucutra que queremos por cada item})
let precios = productos.map((item) => item.precio);
let nombres = productos.map((item) => item.nombre);
console.log(precios);
console.log(nombres);