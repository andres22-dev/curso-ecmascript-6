//Creamos un array de numeros
let numbers = [1, 2, 3, 7, 8];

//Es7 metodo includes se utiliza con un array o string
// Sirve para buscar entre todos los elementos el que se le pasa por parametro
// Si se encuentra el valor que se le pasa por parametro retorna true si no false
// Includes recibe como segundo parametro la posicion del array donde el metodo
//  va a empezar a buscar

//Anteriormente utilizavamos indexOff


if(numbers.includes(7)){

    console.log('Si se encuentra el valor 7')

}else{


    console.log('No se encuentra');
}

// Saber el exponente de un numero lo hacemos con **

let base = 4;
let exponent = 3;
let result = base ** exponent;

console.log(result); // 4 elevado en potencia de 3 = 64
