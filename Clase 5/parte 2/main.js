// console.log(document.body);
//ACCESO AL DOM
//getElementById(); //busca un elemento por su id

// let aplicacion = document.getElementById("aplicacion");
// console.log(aplicacion.innerHTML);
// console.log(aplicacion.innerText);

// let parrafo = document.getElementById("parrafo");
// console.log(parrafo.innerHTML);
// console.log(parrafo.innerText);

//getElementsByClassName() //busca los elementos por clase
// let perritos = document.getElementsByClassName("perritos");
// console.log(perritos); //HTMLCollection similar a un arreglo pero no es un arreglo
// console.log(perritos[0].innerHTML);
// console.log(perritos[1].innerHTML);
// console.log(perritos[2].innerHTML);

// for(const perrito of perritos){
//   console.log(perrito.innerHTML);
// }

//getElemtsByTagName() busca elementos por tag o nombre de etiqueta

// let divs = document.getElementsByTagName("div");
// console.log(divs[0].innerHTML);
// console.log(divs[1].innerHTML);
// console.log(divs[2].innerHTML);

//MODIFICAR EL DOM
// let saludo = document.getElementById("saludo");

// saludo.innerHTML = "<h1>Hola mundo</h1>";

// let saludo = document.getElementById("saludo");
// let seccion = prompt("Ingrese la seccion a ingresar");

// if (seccion === "carrito") {
//   saludo.innerHTML = `<h1>Bienvenidos al ${seccion}</h1>`;
//   saludo.className = "rojo";
// } else if (seccion === "favoritos") {
//   saludo.innerHTML = `<h1>Bienvenidos a los ${seccion}</h1>`;
//   saludo.className = "amarillo";
// } else {
//   saludo.innerHTML = `<h1>Bienvenidos a nuestra super página</h1>`;
//   saludo.className = "verde";
// }

//CREACIÓN DE NODOS
//creación de la etiqueta
// let parrafo = document.createElement("p");

//asignación de contenido
// parrafo.innerHTML = "<h1>Hola Coder!</h1>";

//asignación de padre
// document.body.append(parrafo);
// let contenedor = document.getElementById("contenedor");
// contenedor.append(parrafo);

//eliminación de un nodo
// let saludo = document.getElementById("saludo");

// saludo.remove();

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "gorra", precio: 1000 },
  { id: 4, nombre: "media", precio: 1000 },
  { id: 5, nombre: "zapato", precio: 1000 },
];
let contenedor = document.getElementById("contenedor");

productos.forEach((producto) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <div class="verde">
    <h2>Id: ${producto.id}</h2>
    <p>Nombre: ${producto.nombre}</p>
    <b>$${producto.precio}</b>
    </div>
  `;

  contenedor.append(div);
});
