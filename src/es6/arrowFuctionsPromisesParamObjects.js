let name = 'andres';
let age = 32;

//es5

obj = {name: name, age: age}

//es6 

// En ves de hacer la asignacion completa solo indicamos la variable al objeto
// Y javascript hara la asignacion como si la estuvieramos haciendo
// Nos sirve cuando queremos establecer un objeto con varios elementos y
// no tendriamos que hacer la asignacion de cada cosa

obj2 = {name, age}

console.log(obj, obj2);

// Arrow Fuctions

const names = [

    {name: 'Oscar', age: 32},
    {name: 'Yesica', age:27}
]

// Funcion Normal 

let listOfNames= names.map(function(persona){

    console.log(persona.name)

})

// Arrow Function
let listOfNames2 =  names.map((item)=>{ console.log(item.name)})

// Otra forma en la que encontraremos Arrow Function
 
const listOfNames3 = (name, age, country) =>{


}

// Arrow function con un solo parametro no es necesario ()

const listOfNames4 = name => {}

// Otra forma de arrow function sin () ni {} y nos retorna su valor directamente

const square = num => num * num;


// Promesas para trabajar con asincronismo

// es5 callback

// es6 promesas pra reparar el problema con los callback hell

const helloPromise = () =>{

    return new Promise((resolve,reject)=>{

        if(true){

            resolve('Hey!!')

        }else{

            reject('Ups')
        }


    })

}

// Para ejecutar nuestra promesa

//invocamos la funcion que la retorna
helloPromise()
    //Concatenamos .then y esta funcion nos permite obtener el valor de la promesa
    //Obtenemos el valor atraves de una funcion que le pasamos por parametro
    .then(response => console.log(response))
    //Podremos encadenar varios .then para seguir obteniendo respuestas
    .then(response => console.log(response))
    //En el catch  saldra un error si las promesas no se resuelven
    .catch(error => console.log(error));
