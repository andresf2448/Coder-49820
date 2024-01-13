//SWEETARLET
let boton = document.getElementById("boton");

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Good job!",
//     text: "You clicked the button!",
//     icon: "success",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Error!",
//     text: "Do you want to continue?",
//     icon: "success",
//     confirmButtonText: "Cool",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Genial!",
//     text: "Haz clickeado el botón!",
//     icon: "success",
//     confirmButtonText: "Cool",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     position: "top-end",
//     icon: "success",
//     title: "Your work has been saved",
//     showConfirmButton: false,
//     timer: 5000,
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Sweet!",
//     text: "Modal with a custom image.",
//     imageUrl: "https://unsplash.it/400/200",
//     imageWidth: 400,
//     imageHeight: 200,
//     imageAlt: "Custom image",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Está seguro de eliminar el carrito?",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonText: "Sí, seguro",
//     cancelButtonText: "No, no quiero",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       localStorage.removeItem("carrito"); //borramos el carrito de compras
//       Swal.fire({
//         title: "Borrado!",
//         icon: "success",
//         text: "El carrito ha sido borrado",
//       });
//     }else{
//       Swal.fire({
//         title: "Carrito sin borrar!",
//         icon: "error",
//         text: "El carrito no ha sido borrado",
//       });
//     }
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Ingrese el producto a buscar",
//     input: "text",
//     showCancelButton: true,
//     confirmButtonText: "Look up",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       //buscamos el producto(arreglo le hago un find)  reult.value === "camisa"
//       Swal.fire({
//         title: `${result.value}`,
//       });
//     }
//   });
// });

//TOASTIFY
// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Probando toast!",
//     duration: 3000,
//   }).showToast();
// });

// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Probando toast!",
//     duration: 3000,
//     style: {
//       background: "linear-gradient(to left, #00b09b, #96c92d)",
//     },
//   }).showToast();
// });

// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Probando toast!",
//     duration: 3000,
//     onClick: () => {
//       Toastify({
//         text: "Clickeaste un Toast!",
//         duration: 1500,
//       }).showToast();
//     },
//   }).showToast();
// });

// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Click aquí para ir a Coder!",
//     duration: 3000,
//     destination: "https://www.coderhouse.com",
//   }).showToast();
// });

//LUXON
// const DateTime = luxon.DateTime;
// const hoy = DateTime.local(2024, 1, 13, 10, 53);
// console.log(hoy.c);
// console.log(`${hoy.c.hour} --- ${hoy.c.year}`);
// console.log(hoy.toString());
// console.log(hoy.year);
// console.log(hoy.month);
// console.log(hoy.day);
// console.log(hoy.second);
// console.log(hoy.weekday);
// console.log(hoy.zoneName);
// console.log(hoy.daysInMonth);
// console.log(hoy.toLocaleString());
// console.log(hoy.toLocaleString(DateTime.DATE_FULL));
// console.log(hoy.toLocaleString(DateTime.TIME_SIMPLE));
// console.log(hoy.setLocale('en').toLocaleString(DateTime.DATE_FULL));
// console.log(hoy.setLocale('es').toLocaleString(DateTime.DATE_FULL));

// const DateTime = luxon.DateTime;
// const hoy = DateTime.now();

// console.log(hoy.toLocaleString(DateTime.DATETIME_SHORT));

// const suma = hoy.plus({ hours: 5, minutes: 10 });

// console.log(suma.toLocaleString(DateTime.DATETIME_SHORT));

// const resta = hoy.minus({ month: 2, days: 1 });

// console.log(resta.toLocaleString(DateTime.DATETIME_SHORT));

const Interval = luxon.Interval;
const DateTime = luxon.DateTime;
const hoy = DateTime.now();
const navidad = DateTime.local(2024, 12, 24);
const i = Interval.fromDateTimes(hoy, navidad);

console.log(i.length('days'));
console.log(i.length('hours'));
console.log(i.length('minutes'));