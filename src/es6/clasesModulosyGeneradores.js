
//declaramos una clase

class calculator {

    //le asignamos un constructor que es un metodo para iniciar nuestra clase
    constructor(){

        this.valueA = 0;
        this.valueB = 0;

    }

    //funcion sumar en la cual le voy a pasar por parametro los numeros que quiero sumar

    sum(valueA, valueB){

        // asigno los parametros que recibo a las variables que declare en el constructor
        this.valueA = valueA;
        this.valueB = valueB;
        //retorno la suma de los dos numeros
        return this.valueA + this.valueB;

    }

}
//creo un nuevo objeto deribado de mi clase
const calc = new calculator();
//incovo mi funcion junto con el metodo sumar y paso los 2 numeros que voy a sumar

calc.sum(2,2);


// Import y Export tambien dentro de es6
// Podremos separar codigo de mi archivo principal en otro archivo

/* Export

para exportar lo hacemos desde el archivo donde queremos exportar codigo


     export default nombreVariable

*/

// Import  import {nombreVariable} from 'ubicacionArchivo'

import {hello} from './module.js';

//Asi entonces ya podriamos utilizar lo que importamos desde este documento

hello();


//Generadores

// Sintaxis function* 

function* helloWorld(){

    if(true){

        yield 'Hello, '
    }

    if(true){

        yield 'World'
    }

}

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);