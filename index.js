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

// Iteration#5 Promedio de strings Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. 
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {

    totalSuma = 0;
    for(let i=0; i<param.length; i++){
      if(typeof param[i] === "number"){
        totalSuma += param[i];
      } else { 
        if (typeof param[i] === "string"){
          totalSuma += param[i].length
        };
      }
    };
    return totalSuma;
    // Nota: el ejercicio pide una suma pero el título del ejercicio y el nombre de la función aluden a un promedio. Si lo que se necesita es el promedio habría que sustituir "return totalSuma;" por "return totalSuma / param.length;"
}

// Iteración #6: Valores únicos
// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
  let temporal = [];
  for (let i = 0; i < param.length; i++){
      if (!temporal.includes(param[i])){
        temporal.push(param[i]);
      };
      
  }
 return(temporal);
  
}
removeDuplicates(duplicates);

/*Iteración #7: Buscador de nombres
Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. */
const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(param,valor) {
  for(let i=0; i<param.length;i++) {
    if(param[i]==valor){
      return [true , i];
    };
  }
  return [false];
}
// el return podría ser un string concatenando "true/false" con i

