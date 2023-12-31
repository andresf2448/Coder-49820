//Objeto Math
// console.log(Math.E); // número de euler
// console.log(Math.PI); // número pi

// console.log(Math.min(5, 5, 7, 8, 4, 5, 4, 5, 8)); //minimo de un conjunto de núemros
// console.log(Math.max(5, 5, 7, 8, 4, 5, 4, 5, 8)); //máximo de un conjunto de números

// console.log(Math.min(5, 5, 7, 8, 4, 5, -Infinity, 4, 5, 8));
// console.log(Math.max(5, 5, 7, 8, 4, 5, Infinity, 4, 5, 8));

//redondeos
// console.log(Math.ceil(3.1)); //redondea hacia el entero mayor más cercano
// console.log(Math.ceil(3.7));

// console.log(Math.floor(3.7)); //redondea hacia el entero menor más cercano
// console.log(Math.floor(3.1));

// console.log(Math.round(3.14));//redondea hacia el entero más cercano
// console.log(Math.round(3.7));
// console.log(Math.round(3.5));

// console.log(Math.sqrt(9));//sacar raíz cuadrada
// console.log(Math.sqrt(2));
// console.log(Math.sqrt(1));
// console.log(Math.sqrt(-1));

// console.log(Math.random()); //número aleatorio entre cero y uno
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

// console.log(Math.random() * 10);
// console.log(Math.random() * 10);
// console.log(Math.random() * 10);
// console.log(Math.random() * 10);
// console.log(Math.random() * 10);

// console.log(Math.random() * 20);
// console.log(Math.random() * 20);
// console.log(Math.random() * 20);
// console.log(Math.random() * 20);
// console.log(Math.random() * 20);

// console.log(Math.round(Math.random() * 20));
// console.log(Math.round(Math.random() * 20));
// console.log(Math.round(Math.random() * 20));
// console.log(Math.round(Math.random() * 20));
// console.log(Math.round(Math.random() * 20));

// Math.random() * amplitud + inicial

// 7 - 20
// console.log(Math.floor(Math.random() * 13 + 7));
// console.log(Math.floor(Math.random() * 13 + 7));
// console.log(Math.floor(Math.random() * 13 + 7));
// console.log(Math.floor(Math.random() * 13 + 7));
// console.log(Math.floor(Math.random() * 13 + 7));

//20 - 35
// console.log(Math.round(Math.random() * 15 + 20));
// console.log(Math.round(Math.random() * 15 + 20));
// console.log(Math.round(Math.random() * 15 + 20));
// console.log(Math.round(Math.random() * 15 + 20));
// console.log(Math.round(Math.random() * 15 + 20));

//77 - 101
// console.log(Math.floor(Math.random() * 24 + 77));
// console.log(Math.floor(Math.random() * 24 + 77));
// console.log(Math.floor(Math.random() * 24 + 77));
// console.log(Math.floor(Math.random() * 24 + 77));
// console.log(Math.floor(Math.random() * 24 + 77));
// console.log(Math.floor(Math.random() * 24 + 77));
// console.log(Math.floor(Math.random() * 24 + 77));
// console.log(Math.floor(Math.random() * 24 + 77));

const generarAleatorio = (amplitud, desplazamiento) => {
  return Math.round(Math.random() * amplitud + desplazamiento);
};

// 5 - 90
// console.log(generarAleatorio(85, 5));
// console.log(generarAleatorio(85, 5));
// console.log(generarAleatorio(85, 5));
// console.log(generarAleatorio(85, 5));
// console.log(generarAleatorio(85, 5));

//17 - 24
// console.log(generarAleatorio(7, 17));
// console.log(generarAleatorio(7, 17));
// console.log(generarAleatorio(7, 17));
// console.log(generarAleatorio(7, 17));
// console.log(generarAleatorio(7, 17));

//hacer una algoritmo que genere nombres aleatorios de una arreglo dado
// let nombres = ["camila", "andres", "juan", "mario", "pedro", "carlitos"];

// const generarNombreAleatorio = () => {
//   let index = Math.floor(Math.random() * nombres.length);

//   return nombres[index];
// };

// console.log(generarNombreAleatorio());
// console.log(generarNombreAleatorio());
// console.log(generarNombreAleatorio());
// console.log(generarNombreAleatorio());
// console.log(generarNombreAleatorio());
// console.log(generarNombreAleatorio());
// console.log(generarNombreAleatorio());
// console.log(generarNombreAleatorio());
// console.log(generarNombreAleatorio());

//Date
// console.log(Date());
// console.log(new Date(2023, 11, 16));
// const navidad = new Date(2023, 11, 24, 23, 59, 59);
// console.log(navidad);

// const navidad = new Date("December 24, 2023 23:59:59");
// console.log(navidad);

// console.log(navidad.toDateString());
// console.log(navidad.toLocaleString());
// console.log(navidad.toLocaleDateString());
// console.log(navidad.toTimeString());
// console.log(navidad.getFullYear());
// console.log(navidad.getMonth());
// console.log(navidad.getDay());

const navidad = new Date("December 24, 2023");
const hoy = new Date("December 16, 2023");

console.log(navidad - hoy);
const milisegundosPorDia = 86400000;

console.log((navidad - hoy) / milisegundosPorDia);
