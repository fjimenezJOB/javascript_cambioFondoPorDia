/*
    Cambio de color de fondo según el dia del mes
    ---------------------------------------------
    Autor: Fran Jimenez
    Version: 0.1

*/
// Definimos los colores que tienen que cambiar segun el dia
const COLORES_MES = [
  "#e80497",
  "#138a20",
  "#3dcdfd",
  "#eeedbf",
  "#d1c308",
  "#c005aa",
  "#f16250",
  "#606941",
  "#b1fd12",
  "#9e0baf",
  "#0a57ff",
  "#0c4f41",
  "#17841d",
  "#b89a68",
  "#8d8b24",
  "#e44024",
  "#6339aa",
  "#de9eb4",
  "#7543cd",
  "#c8d81b",
  "#8c5ff8",
  "#5e6389",
  "#63c79b",
  "#9d5513",
  "#46b9c5",
  "#3e8715",
  "#bb418f",
  "#927db5",
  "#36cfdf",
  "#f88b98",
  "#6a1de2",
];

function cambiarColor() {
  // cojemos el elemento body del HTML
  var body = document.getElementsByTagName("body")[0];
  // cojemos el dia del mes en el que estamos, le restamos 1 para que el dia 1 en el array coja el color [0]
  var dia = new Date().getDate();
  var diaArray = dia - 1;
  //   Cambiamos el color del body segun el numero de dia que sea
  body.style.backgroundColor = COLORES_MES[diaArray];
}
// llamamos a la funcion
cambiarColor();