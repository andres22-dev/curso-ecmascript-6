/* es8 funcion object.entries sirve para poner los atributos del objeto
en una matriz, la funcion recibe por parametro un objeto 

esta funcion va de la mano en conjunto con .length para saber la
cantidad de elementos que tiene nuestra matriz o array
*/

const data = {

  frontend: 'oscar',
  backend: 'isabel',
  design: 'ana'

}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


/* es8 funcion object.values() lo que hace es devolvernos un objeto como un array 
pero solo de los valores de los atributos y este recibe por parametro un array */

const data = {

    frontend: 'oscar',
    backend: 'isabel',
    design: 'ana'
  
  }

const values = Object.values(data);
console.log(values);


const string = 'hello';
console.log(string.padStar())


/*es8 padding
nos permite añadir cadenas vacias a string, podiendo modificar la cadena string como tal.
var.padStart(indicador de suma de los caracteres en total + los que vamos a añadir, 
    el texto que vamos a añadir)
    padStart -> se añade al inicio
    padEnd -> se añade al final
*/ 

const string = 'hello';
console.log(string.padStar(7, 'hi'));
console.log(string.padEnd(12, ' ----'));
console.log('food'.padEnd(12, '  ----'));
