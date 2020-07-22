
/* FUNCION SIN ASIGACION EN PAREMETROS*/
function newFunction(name, age, country){

    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';

    console.log(name, age, country);
}


//es6


/* FUNCION CON ASIGNACIONES EN PAREMETROS*/
function newFunction2(name = 'oscar', age = 32, country = "MX"){

  console.log(name, age, country);

};

newFunction2(); //si no le ponemos valores a la funcion cuando la invocamos
                // se ponen los que pusimos por defecto

newFunction2('ricardo', '23', 'CO'); //invocacion de funcion con valores asignados


//es5 concatenacion de variables con +
let hello = "Hello";
let world = "World";
let epicPhrase = hello+' '+world;
console.log(epicPhrase);

//es6 template string 
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


//es5 añadir un enter a textos forma antigua concatenando y poniendo /n
let lorem = "aqui va frase epiquisima\n"
+"otra frase epica que necesitamos"

/*es6 template string, no es necesario concatenar nada solo damos enter 
y se genera el espacio*/
let lorem2 = `otra frse epica que necesitamos
 ahora es otra frase epica`;

 console.log(lorem);
 console.log(lorem2);
 

//es5 imprimir valores de objetos
 let person = {
   'name': 'oscar',
   'age': 32,
   'country':'MX'

 }

 console.log(person.name, person.age)

 /*es6 de esta manera podemos desestructurar un objeto y poder utilizarlo
 de una forma mas amigable*/

 let {name, age, country} = person;
 console.log(name, age, country);


 /*es6 unir arrays  para que no ocupen mucho espacio cuando necesitamos
 poner varios elementos en un array, accedemos a esos elementos atraves
 de ...team1 haciendo referencia a la variable que hace referencia en
 memoria del array*/
 let team1 = ['oscar', 'julian', 'ricardo'];
 let team2 = ['valeria', 'yesica', 'camila'];

 let education = ['David', ...team1, ...team2];

 console.log(education);



/*es6 let forma diferente de espacios en memoria, la diferencia de let con
var es que var funciona en todo el scope(Scope Global) y en cambio let solo
funciona en el scope local osea en el bloque de codigo en el que se encuentre*/
{

  var global = "global var";
}

{

let globalLet = 'Global Let';

}

console.log(global);
console.log(globalLet);



/*es6 const manera de expresar una variable, que funciona distinto tanto 
como a var y como a let, lo que hace es que el valor que se le asigna nunca
va a cambiar a pesar de que sea reasignado otro valor este se mantendra igual*/

const a = 'b';
a = 'a';
console.log(a);




let name = 'oscar';
let age = 32;

//es5
obj = {name: name, age: age};

/*es6 si la keya la que sera asignado un valor que es variable se puede llamar
de la misma manera sin necesidad de expresarla como asignacion si no, solo 
colocar la variable en el objeto*/
obj2 = {name, age};

console.log(obj2);



const names = [

  {name: 'oscar', age:32},
  {name: 'Yesica', age:27}
]

//es5  funcion anonima
let listOfNames = names.map(function (item){
  
  console.log(item.name);


})
//es6 arrow function
let listOfNames2 = names .map(item=> console.log(item.name));

/*forma 2 arrow function le asignamos la funcion a una constante y
esta contiene demasiados parametros por lo tanto ocupamos los ()*/

const listOfNames3 = (name,age, country)=>{

//bloque  de codigo
}
/*forma 3 arrow function si solo vamos a utilizar un parametro no
ocupamos parametros*/
const listOfNames4 = name => {//bloque  de codigo
}

/*forma 4 arrow function no utilizar {} si solo es una linea de codigo*/

const square = num => num * num;


//es5 callback 

/*es6 Promesas las promesas espera una logica que debamos resolver,
ya sea resolvida o no*/

const helloPromise = () =>{
 
  return new Promise((resolve,reject)=>{

  if(true){
    resolve('Heyy!!')

  }else{
    reject('Ups!!')
  }

  })
}

helloPromise()
.then(respuesta=> console.log(respuesta))
.catch(error=> console.log(error))




