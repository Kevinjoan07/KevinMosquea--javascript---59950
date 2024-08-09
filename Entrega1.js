//calcular pagos en cuotas sobre un monto determinado

//Introduccion al servicio-------------
alert("Bienvenido \n al calculador de cuotas para prestamos");
let op = prompt(
  "Desea calcular las cuotas de su prestamo?  \n  N / Y"
).toUpperCase();

// Funciones------------
function conIntereses(monto, tasaAnual) {
  let tasaMensual = tasaAnual / 12;
  let termino4 = Math.pow(1 + tasaMensual, -6);
  let denominador = 1 - termino4;
  let cuotamensual = (monto * tasaMensual) / denominador;
  return parseFloat(cuotamensual).toFixed(2);
}

const sinIntereses = (monto, plazo) => {
  return parseFloat(monto / plazo).toFixed(2);
};

//Ciclos para que pueda calcular varios montos  con o sin intereses y a los plazos mas comunes---------
do {
  if (op == "N") {
    break;
  } else if (op == "Y") {
    const TASA = 0.2206;
    let monto = prompt("Ingrese el  monto del prestamo");
    let plazo = parseInt(
      prompt(
        "Escoja a cuantos meses desea pagar el prestamo \n 6 meses \n 12 meses \n 24 meses \n 36 meses"
      )
    );
    let opcalculo = parseInt(
      prompt(
        "Indique si su prestamos es:  \n  1: Con interes \n 2: Sin interes "
      )
    );

    if (opcalculo == 1) {
      switch (plazo) {
        case 6:
          alert("cada cuota será de:  " + conIntereses(monto, plazo, TASA));
          console.log("cada cuota será de: ", conIntereses(monto, plazo, TASA));
          break;

        case 12:
          alert("cada cuota será de:  " + conIntereses(monto, plazo, TASA));
          console.log("cada cuota será de: ", conIntereses(monto, plazo, TASA));
          break;

        case 24:
          alert("cada cuota será de:  " + conIntereses(monto, plazo, TASA));
          console.log("cada cuota será de: ", conIntereses(monto, plazo, TASA));
          break;

        case 36:
          alert("cada cuota será de:  " + conIntereses(monto, plazo, TASA));
          console.log("cada cuota será de: ", conIntereses(monto, plazo, TASA));
          break;

        default:
          alert("Porfavor escoja un plazo correcto");
          console.log("Porfavor escoja un plazo correcto");
          break;
      }
    } else if (opcalculo == 2) {
      switch (plazo) {
        case 6:
          alert("cada cuota será de:  " + sinIntereses(monto, plazo));
          console.log("cada cuota será de ", sinIntereses(monto, plazo));
          break;

        case 12:
          alert("cada cuota será de:  " + sinIntereses(monto, plazo));
          console.log("cada cuota será de ", sinIntereses(monto, plazo));
          break;

        case 24:
          alert("cada cuota será de:  " + sinIntereses(monto, plazo));
          console.log("cada cuota será de ", sinIntereses(monto, plazo));
          break;

        case 36:
          alert("cada cuota será de:  " + sinIntereses(monto, plazo));
          console.log("cada cuota será de ", sinIntereses(monto, plazo));
          break;

        default:
          alert("Porfavor escoja un plazo correcto");
          console.log("Porfavor escoja un plazo correcto");
          break;
      }
    } else {
      alert("Ingrese una opcion valida");
    }
  } else {
    alert("Ingrese una opcion valida");
  }

  //control para que el ciclo termine
  op = prompt(
    "Desea calcular las cuotas de su prestamo?  \n  N / Y"
  ).toUpperCase();
} while (op != "N");
