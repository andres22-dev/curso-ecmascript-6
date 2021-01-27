// Es8 Object.entries la cual nos va a permitir devolver la clave y
// los valores de una matriz


const data = {

    frontend: 'Oscar',
    backend: 'Isabel',
    desing: 'Ana'


}

// Transformar este objeto en una matriz
const entries = Object.entries(data);
console.log(entries); 

/*
    [
  [ 'frontend', 'Oscar' ],
  [ 'backend', 'Isabel' ],
  [ 'desing', 'Ana' ]
]

*/ 

// Si queremos saber cuantos elementos tiene nuestro arreglo es posible con lenght

console.log(entries.length); //3 elementos

// Object values me devuelve los valores de un objeto a un arreglo

const data ={

    front: 'alej',
    back: 'rel'
}

const values = Object.values(data);
console.log(values); //[ 'alej', 'rel' ]
console.log(values.length);

/*es8 padding
nos permite añadir cadenas vacias a string, podiendo modificar la cadena string como tal.
var.padStart(indicador de suma de los caracteres en total + los que vamos a añadir, 
    el texto que vamos a añadir)
    padStart -> se añade al inicio
    padEnd -> se añade al final
*/ 
const string = 'hello';
console.log(string.padStart(7, 'hi'))

//Trailing comas, nos permite asignar elementos al objeto mediante comas.
const data= {
    front:'Alej', // Puede existir
    back: 'Rel'
}