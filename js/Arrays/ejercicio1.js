/**
 * 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
 * Mostrar por pantalla en forma de lista  los doce nombres del arreglo.
 */

const meses = ["Enero","Febrero", "Marzo","Abril","Mayo", "Junio", "Julio", "Agosto","Septiembre", "Octubre","Noviembre","Diciembre"];

document.write('<h1>Meses del Año</h1>');
document.write('<ol>');
for (let i = 0; i < meses.length; i++) {
 let element = meses[i];
 document.write(`<li>${element}</li>`);
}
document.write('</ol>');
