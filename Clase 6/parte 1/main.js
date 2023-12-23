//EVENTOS
// let boton = document.getElementById("boton");

// const respuesta = () => {
//   console.log("Hola diste click");
// };

// const respuesta = (nombre) => {
//   alert(`Hola ${nombre} diste click`);
// };

//1 forma
//CUIDADO se pasa la declaración de la función
// boton.addEventListener("click", respuesta);

//2 forma
// boton.onclick = respuesta;

// let evento = prompt("Ingrese el evento requerido");
// boton.addEventListener(evento, respuesta);
// let nombre = prompt("Ingrese su nombre");
// boton.addEventListener("click", () => respuesta(nombre));

// let boton = document.getElementById("boton");

//EVENTOS DEL MOUSE

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("click", () => console.log("click"));
// boton.addEventListener("mouseover", () => console.log("mouseover"));
// boton.addEventListener("mouseout", () => console.log("mouseout"));
// boton.addEventListener("mousemove", () => console.log("mousemove"));

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("click", () => console.log("click"));

// let saludo = document.getElementById("saludo");

// boton.addEventListener("mousedown", () => {
//   saludo.className = "rojo";
// });

// boton.addEventListener("mouseup", () => {
//   saludo.className = "verde";
// });

// boton.addEventListener("mouseover", () => {
//   saludo.className = "amarillo";
// });

// boton.addEventListener("mouseout", () => {
//   saludo.className = "azul";
// });

//eventos del teclado
let nombre = document.getElementById("nombre");
let saludo = document.getElementById("saludo");

// nombre.addEventListener("keydown", () => console.log("keydown"));
// nombre.addEventListener("keyup", () => console.log("keyup"));

// let saludo = document.getElementById("saludo");

// nombre.addEventListener("keyup", (e) => {
//   if (e.key === "a") {
//     saludo.className = "rojo";
//   } else if (e.key === "s") {
//     saludo.className = "verde";
//   } else if (e.key === "d") {
//     saludo.className = "amarillo";
//   } else {
//     saludo.className = "azul";
//   }
// });

// nombre.addEventListener("change", () => console.log("change"));

// nombre.addEventListener("input", () => {
//   if (!nombre.value.includes("@") || !nombre.value.includes(".com")) {
//     saludo.className = "rojo";
//   } else {
//     saludo.className = "blanco";
//   }
// });
