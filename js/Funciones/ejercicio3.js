/**
 * Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
 * luego crear una función para calcular su perímetro y mostrarlo por pantalla.
 */

let base = parseFloat(prompt('Ingrese base del rectangulo (cm)'));
let altura = parseFloat(prompt('Ingrese Altura del rectangulo (cm)'));

if(! isNaN(base) && ! isNaN(altura)){
    let resultado = calcularPerimetro(base,altura);
    document.write(`<h3>Su base es: ${base} (cm) y Su Altura es: ${altura} (cm) </h3>`);
    document.write(`<h3>Su perímetro es: ${resultado} (cm)</h3>`);
}

function calcularPerimetro (ingresoBase, ingresoAltura){
    let resultado = 2*(ingresoBase+ingresoAltura);
    return resultado.toFixed(2);
}
