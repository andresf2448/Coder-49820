//ASINCRONISMO
//setTimeout(funcion, tiempo);

// setTimeout(() => {
//   console.log("Hola coder");
// }, 6000);

// console.log("Inicio del programa");

// setTimeout(() => {
//   console.log("Intermedio del programa");
// }, 2000);

// console.log("Fin del programa");

// let boton = document.getElementById("boton");
// let mensaje = document.getElementById("mensaje");

// boton.addEventListener("click", () => {
//   mensaje.classList.add("color");

//   setTimeout(() => {
//     mensaje.classList.remove("color");
//   }, 3000);
// });

// for (let letra of "Hola") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 1000);
// }

// for (let letra of "Mundo") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 3000);
// }

// console.log("Inicio del programa");

// setTimeout(() => {
//   console.log("Intermedio del programa");
// }, 0);

// console.log("Fin del programa");

// function multiply(x, y) {
//   return x * y;
// }

// function printSquare(s) {
//   let resultado = multiply(s, s);
//   console.log(resultado);
// }

// printSquare(5);

// console.log("Inicio del programa");

// setTimeout(() => {
//   console.log("Intermedio del programa");
// }, 0);

// console.log("Fin del programa");

//setInterval(funcion, tiempo);

// setInterval(() => {
//   let div = document.createElement("div");
//   div.innerHTML = "hola";
//   document.body.append(div);
// }, 1000);

// let counter = 0;
// const interval = setInterval(() => {
//   counter++;
//   console.log("Counter: ", counter);

//   if (counter >= 5) {
//     clearInterval(interval);
//     console.log("Se removió el intervalo");
//   }
// }, 1000);

// new Promise((resolve, reject) => {
//   //cuerpo de la promesa
// })

// const futuro = (value) => {
//   return new Promise((resolve, reject) => {
//     value ? resolve(["andres", "juanita"]) : reject("promesa rechazada");
//   });
// };

// console.log(futuro(true));

// const futuro = (value) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       value
//         ? resolve(["andres", "juanita"])
//         : reject("sistema caido, por favor intente luego");
//     }, 2000);
//   });
// };

// futuro(false)
//   .then((response) => {
//     response.forEach((item) => {
//       let div = document.createElement("div");
//       div.innerHTML = item;
//       document.body.append(div);
//     });
//   })
//   .catch((error) => {
//     let div = document.createElement("div");
//     div.innerHTML = error;
//     document.body.append(div);
//   })
//   .finally(() => {
//     let div = document.createElement("div");
//     div.innerHTML = "Proceso finalizado";
//     document.body.append(div);
//   });

////////////////////////////////////////////////////////////////////////////SERVIDOR Europa
const BD = [
  { id: 1, nombre: "Camisa", precio: 1000 },
  { id: 2, nombre: "Pantalon", precio: 750 },
  { id: 3, nombre: "Media", precio: 377 },
  { id: 4, nombre: "Zapato", precio: 135 },
];

const traerProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(BD);
      reject("error en el servidor");
    }, 4000);
  });
};
///////////////////////////////////////////////////////////////////////////

traerProductos()
  .then((response) => {
    response.forEach((item) => {
      let div = document.createElement("div");
      div.innerHTML = `
      <h2>Id: ${item.id}</h2>
      <p>Nombre: ${item.nombre}</p>
      <b>$${item.precio}</b>
    `;
      document.body.append(div);
    });
  })
  .catch((error) => {
    let div = document.createElement("div");
    div.innerHTML = "Por favor intente luego " + error;
    document.body.append(div);
  });
