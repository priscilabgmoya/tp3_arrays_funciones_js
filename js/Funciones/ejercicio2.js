/**
 * 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
 * A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
 * sólo por minúsculas o por una mezcla de ambas.
 */

let texto = prompt('Ingrese una frase');

if(texto != null){
    definirMayusculaMinuscula(texto);
}else{
    alert('ingrese una frase!');
}


function definirMayusculaMinuscula(frase){

    const esMayuscula = (letra)=>{
        return letra === letra.toUpperCase();
    }
    const esMinuscula = (letra)=>{
        return letra === letra.toLowerCase();
    }

    let contador_mayusculas=0 , contador_minusculas=0; 
    for (let i = 0; i < frase.length; i++) {
        const element = frase[i];
        if(esMayuscula(element)){
            contador_mayusculas++;
        }
        if(esMinuscula(element)){
            contador_minusculas++;
        }
    }
    
    document.write(`<h1>Su frase es: ${frase}</h1>`);
    if(contador_mayusculas === frase.length){
        document.write(`<h2>Su frase esta en Mayuscula</h2>`);
    }else 
    if(contador_minusculas === frase.length){
        document.write(`<h2>Su frase esta en Minuscula </h2>`);
    }else{        
        document.write('<h2>Su frase es una mezcla entre mayusculas y minusculas</h2>');
    }

}