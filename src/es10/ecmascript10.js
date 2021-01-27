let array = [1,2,3,[1,2,3,[1,2,3]]];

//Metodo .flat() sirve para aplanar los arreglos
//Recibe como parametro la profundidad del arreglo
console.log(array.flat(2)) // [1, 2, 3, 1, 2, 3, 1, 2, 3]

console.log(array.flat()) // [ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ]


//Metodo .flatMap() hace lo mismo que .flat
// Y ademas de eso podremos mapear el arreglo para modificarlo

console.log(array.flatMap(value => [value, value * 2]))


let hello = '      hello world';

/*
String.prototype.trimStart() | String.prototype.trimEnd() permite quitar
 los espacios al inicio o al final dependiendo de la funcion.

*/
console.log(hello);
console.log(hello.trimStart())

/*
Opcional catch binding esto significa que podemos utilizar el try catch
sin necesidad de pasarle un parametro al catch

*/
try{


// Antes utilizabamos el parametro error para utilizarlo en el catch
// Ahora podemos utilizarlo directamente en el catch
}catch{

    error
}

// Object.fromEntries
/*
    es decir podemos convertir un objeto en una matriz clave/valor con 
    Object.entries(), y hace lo inverso es decir de una matriz clave/valor
     a un objeto con Object.fromEntries().Symbol.


*/
let entries = [["name","oscar"],["age",32]];

console.log(object.fromEntries(entries));

// Symbol permite regresar la descripcion opcional de un simbolo

let mySymbl =  `My symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);