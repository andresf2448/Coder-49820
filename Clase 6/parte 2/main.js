//STORAGE
//localStorage ofrece persistencia de datos cuando: recarga de página, cierre de página, apagado y reiniciado del computador

//setItem(clave, valor); guarda el par clave valor en el storage
// localStorage.setItem("nombre", "juan");
// localStorage.setItem("valor", "true");
// localStorage.setItem("numero", "5");

//getItem(clave); recupera un valor por su clave
// let nombre = localStorage.getItem("nombre");
// console.log(nombre);

// let valor = localStorage.getItem("valor");
// console.log(valor);

// let numero = localStorage.getItem("numero");
// console.log(numero);

// localStorage.setItem("objeto", { nombre: "andres", edad: 45 });
// localStorage.setItem("arreglo", [3, 4, 56, 7, 8]);

// for (let i = 0; i < localStorage.length; i++) {
//   let clave = localStorage.key(i);
//   console.log("clave", clave);
//   console.log("valor asociado", localStorage.getItem(clave));
// }

//removeItem(clave); elimina un par clave valor por su clave
// localStorage.removeItem("nombre");

//clear(); Elimina todo el storage
// localStorage.clear();

//sessionStorage ofrece persistencia de datos cuando: recarga de página
// sessionStorage.setItem("nombre", "juan");
// sessionStorage.setItem("valor", "true");
// sessionStorage.setItem("numero", "5");

// let nombre = sessionStorage.getItem("nombre");
// console.log(nombre);

// let valor = sessionStorage.getItem("valor");
// console.log(valor);

// let numero = sessionStorage.getItem("numero");
// console.log(numero);

// for (let i = 0; i < sessionStorage.length; i++) {
//   let clave = sessionStorage.key(i);
//   console.log("clave", clave);
//   console.log("valor asociado", sessionStorage.getItem(clave));
// }

// sessionStorage.removeItem("nombre");
// sessionStorage.clear();

/* 
La diferencia entre localStorage y sessionStorage, es que el primero persiste la información cuando recargas, cierras, apagas o reinicias, mientras que el segundo solo persiste la información cuando recargamos la página
*/

// let objeto = { nombre: "juan", edad: 56 };
// console.log(typeof objeto);
// let objetoJson = JSON.stringify(objeto)
// console.log(typeof objetoJson);

// let objeto = { nombre: "juan", edad: 56 };
// localStorage.setItem("objeto", JSON.stringify(objeto));

// let arreglo = [2, 3, 45, 67];
// localStorage.setItem("arreglo", JSON.stringify(arreglo));

// let objeto = localStorage.getItem("objeto");
// console.log(JSON.parse(objeto));

// let arreglo = localStorage.getItem("arreglo");
// console.log(JSON.parse(arreglo));

/* 
el JSON.stringify(elemento) le da formato json al elemento
el JSON.parse(elemento) devuelve su forma original del elemento
*/

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 700 },
//   { id: 3, nombre: "zapato", precio: 137 },
//   { id: 4, nombre: "media", precio: 425 },
// ];

// const guardarStorage = (clave, valor) => {
//   localStorage.setItem(clave, valor);
// };

// productos.forEach((item) => guardarStorage(item.id, JSON.stringify(item)));

// localStorage.setItem("carrito", JSON.stringify(productos));

//EJEMPLOS

// let usuario;
//traemos al usuario del storage
// let usuarioStorage = sessionStorage.getItem("usuario");

// if (usuarioStorage) {
//si hay usuario lo mostramos
//   usuario = usuarioStorage;
//   alert(`Bienvenid@ nuevamente ${usuario}`);
// } else {
//si no hay usuario lo pedimos y guardamos en el storage
//   usuario = prompt("Ingrese su usuario");
//   alert(`Bienvenid@ por primera vez ${usuario}`);
//   sessionStorage.setItem("usuario", usuario);
// }

//codigo para cargar el storage
// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 700 },
//   { id: 3, nombre: "zapato", precio: 137 },
//   { id: 4, nombre: "media", precio: 425 },
// ];
// localStorage.setItem("carrito", JSON.stringify(productos));

let carrito = [];
let eliminar = document.getElementById("eliminar");
//traemos el carrito del storage
let carritoStorage = localStorage.getItem("carrito");

if (carritoStorage) {
  //si hay carrito lo cargamos
  carrito = JSON.parse(carritoStorage);
} else {
  let div = document.createElement("div");
  div.innerHTML = "<h2>Carrito vacio</h2>";
  document.body.append(div);
}

//recorremos el carrito y mostramos cada uno de los productos
carrito.forEach((item) => {
  //creamos la etiqueta para mostrar el producto
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
  `;

  document.body.append(div);
});

//agregamos el event listener para el boton eliminar el carrito
eliminar.addEventListener("click", () => {
  //borramos el storage
  localStorage.clear();
  alert("carrito eliminado");
  //recargamos la pagina
  location.reload();
});
