/**
 * 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y 
 * almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, 
 * luego realizar las siguientes acciones:
Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
 */
let ciudades = [];
let ciudad;
do {
  ciudad = prompt("ingrese una ciudad...");
  if(ciudad != null){
      ciudades.push(ciudad);
  }
} while (ciudad != null);
if(ciudad === null){
    document.write("<h3>Array Ciudades</h3>");
    document.write(`<label>[ ${ciudades} ] </label>`);
    document.write("<p>-----------------------------------------------------------------------------</p>");
    document.write("<h3>Longitud del array Ciudades</h3>");
    document.write(`<label>${ciudades.length} </label>`);
    document.write("<p>-----------------------------------------------------------------------------</p>");
    document.write("<h3>Primer, Segundo y Tercer items  del array Ciudades</h3>");
    document.write('<ol>');
    for (let i = 0; i < 3; i++) {
      let element = ciudades[i];
      document.write(`<li>${element}</li>`);
    }
    document.write('</ol>');
    document.write("<p>-----------------------------------------------------------------------------</p>");
    document.write("<h3>Agregamos París al final del Array de Ciudades </h3>");
    ciudades.push("París"); 
    document.write("<h4>Nuevo array Ciudades</h4>");
    document.write(`<label>[ ${ciudades} ] </label>`);
    document.write("<p>-----------------------------------------------------------------------------</p>");
    document.write("<h3>Elemento de la segunda Posicion del Array de Ciudades </h3>");
    let elemento = ciudades[1];
    document.write(` <label>${elemento}  </label>`);
    document.write(`<h4>Cambiamos ${elemento} por Barcelona</h4>`);
    ciudades[1]="Barcelona";
    document.write("<h5>Nuevo array Ciudades</h5>");
    document.write(`<label>[ ${ciudades} ] </label>`);
}


