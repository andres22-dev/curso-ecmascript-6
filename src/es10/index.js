/*es10 funcion flat sirve para aplanar el contenido de una matriz para reducir
 la profundidad que tenga, si recibe nada mostrara toda la matiz.*/

let array = [1,2,3,[1,2,3, [1,2,3]]];

console.log(array.flat(2));

/* funcion flatmap esta funcion nos sirve para mapear los elementos
de un array y tiene esta estructura [valor, valor modificado] 
[
  1, 2, 2, 4,  3,
  6, 4, 8, 5, 10
]

*/
let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value *2]))


/* funcion que nos sirve para eliminar los espacios de un string 
     var.trimStart  -> este los elimina al inicio
     var.trimEnd -> este los elimina al final

*/

let hello = '        hello world';

console.log(hello);
console.log(hello.trimStart());

let hello = 'hello world    ';

console.log(hello);
console.log(hello.trimEnd());


/*try catch podemos no poner como parametro para que funcione el error en catch
y aun asi funcionara correctamente*/

try{

}catch{

    error

}


/* convertir array bidimensional en  un objeto con la funcuib
   object.fromEntries(entries);  -> resive por parametro un array
*/ 


let entries = [["name","oscar"],["age",32]];
console.log(Object.fromEntries(entries));


/* de esta forma podemos crear una descripcion a un objeto  y tambien acceder a ella*/


let mySymbl =  `My symbol`;
let symbol = Symbol(mySymbl);  //-> Symbol creamos esa descripcion
console.log(symbol.description); //-> con punto description accedemos a esa descripcion
