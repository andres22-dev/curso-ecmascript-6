
//es5 multilinea para indicar que daremos un salto de linea 
// utilizamos \n

let lorem = "Quiero Dominar Javascript :) \n"
+"Estamos en proceso"


//es6 nueva forma de utilizar multilineas 

let lorem2 = `Aprendiendo js como goku
damos salto de linea`;

console.log(lorem);
console.log(lorem2);

// Desestructuracion de elementos

let person = {

    'name': 'oscar',
    'age' : 32,
    'country' : 'MX'
}

    console.log(person.name, person.age, person.name);

//es6 obtenemos los atributos del objeto person y los imprimimos
let {name, age, country} = person;

//si solo necesitaramos 2 atributos de ese objeto

let {name, age} = person;

console.log(name,age,country);

//indicamos los que coremos y lo imprimimos tambien  de esa forma
console.log(name,age);

// Spread Operator


let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

/*Con ayuda del spread operator podremos poner los elemento de nuestro array
  Dentro de otro array utilizando ... junto la variable del array.  

  De esta forma podemos unir varios elementos de forma mas sencilla y amigable
*/

let education = ['David',...team1, ...team2];

console.log(education);

// Diferencia entre var, let y const
var hola = 'hola'; // Scope Global

let holalet = 'hola let'; // Scope Local

const holaconst = 'hola const'; // Mismas funciones que let, pero no podra reasignarse.

{

    var globalVar = "Global var"
}

{

    let globalLet = 'Global Let';
    console.log(globalLet); // aqui si podriamos imprimirla
}

console.log(globalVar); // imprime el mensaje
console.log(globalLet); // undefined


const a = 'b';
a = 'a' // no podremos reasignar una constante
console.log(a); //imprime b