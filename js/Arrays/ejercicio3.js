/***
 * 3- Escribir un script que simule el lanzamiento de dos dados.
 * Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno
 * de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array
 * el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
 */

let sumaDeDados = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function lazarDados() {
  let random = Math.random();
  let superior = 6;
  let inferior = 1;
  let resultado = Math.floor(random * (superior - inferior));
  return resultado;
}

for (let i = 0; i < 50; i++) {
  let dado_1 = lazarDados();
  let dado_2 = lazarDados();
  let sumaDados = dado_1 + dado_2;
  agregarArraySuma(sumaDados);
  // sumaDeDados.push(sumaDados);
}

function agregarArraySuma(resultado) {
  switch (resultado) {
    case 1:
      sumaDeDados[0]++;
      break;
    case 2:
      sumaDeDados[1]++;
      break;
    case 3:
      sumaDeDados[2]++;
      break;
    case 4:
      sumaDeDados[3]++;
      break;
    case 5:
      sumaDeDados[4]++;
      break;
    case 6:
      sumaDeDados[5]++;
      break;
    case 7:
      sumaDeDados[6]++;
      break;
    case 8:
      sumaDeDados[7]++;
      break;
    case 9:
      sumaDeDados[8]++;
      break;
    case 10:
      sumaDeDados[9]++;
      break;
    case 11:
      sumaDeDados[10]++;
      break;
    default:
      sumaDeDados[11]++;
      break;
  }
}
document.write(sumaDeDados)
document.write("<table border>");
document.write("<thead>");
document.write("<tr>");
document.write("<th>Suma de los Dos Dados</th>");
document.write("<th>Cantidad de veces Que Aparece</th>");
document.write("</tr>");
document.write("</thead>");
document.write("<tbody>");
for (let i = 0; i < sumaDeDados.length; i++) {
  const element = sumaDeDados[i];
  if (element != 0) {
    document.write("<tr>");
    document.write(`<td>${i+1}</td>`);
    document.write(`<td>${element}</td>`);
    document.write("</tr>");
  }
}
document.write("</tbody>");
document.write("</table>");
