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

boton.addEventListener("click", () => {
  Swal.fire({
    title: "Ingrese el producto a buscar",
    input: "text",
    showCancelButton: true,
    confirmButtonText: "Look up",
  }).then((result) => {
    if (result.isConfirmed) {
      //buscamos el producto(arreglo le hago un find)  reult.value === "camisa"
      Swal.fire({
        title: `${result.value}`,
      });
    }
  });
});
