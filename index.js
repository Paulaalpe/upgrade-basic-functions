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

/*Iteración #3: Calcular la suma
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. */
//const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    let total = 0;
    for(let i =0; i< param.length; i++){
      total += param[i];
    };
    return total;
}

// Iteration#4 Calcular el promedio
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let totalSuma = 0;
    for(let i = 0; i <param.length; i++){
      totalSuma += param[i];
    };
    return totalSuma / param.length;
}