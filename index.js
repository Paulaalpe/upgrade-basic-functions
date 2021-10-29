//OK Iteración#1: Buscar el máximo. Completa la función que tomando dos números como argumento devuelva el más alto.
function sum(numberOne , numberTwo) {
    if (numberOne > numberTwo) {
        return numberOne;
    } else {
        return numberTwo;
    }
}

/*Iteración #2: Buscar la palabra más larga**
Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
*/
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {

    let longitudMaximaElemento = 0;
    let elementoMasLargo = "";

    for(let i =0; i<param.length; i++){
      let longitudElemento = param[i].length;
      if (longitudElemento > longitudMaximaElemento){
        longitudMaximaElemento = longitudElemento;
        elementoMasLargo = param[i];
      } 
    };
    return elementoMasLargo;
}



