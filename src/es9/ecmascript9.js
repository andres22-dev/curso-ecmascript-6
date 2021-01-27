//Spread Operator puede extraer las propiedades de un objeto que aun
//no se ha construido

const obj = {

    name: 'oscar',
    age: 32,
    country: 'CO'


}

//aqui desectructuro el objeto y a lo demas lo encapsulo en un objeto

let {name,...all} = obj;

console.log(name, all); // oscar { age: 32, country: 'CO' }


//Propiedades de Propagacion


const obj = {

    name: 'oscar',
    age: 32,
 


}

//Con el operador de propagacion podremos tambien desglosar un objeto en otro objeto
const obj1 = {

    ...obj,
    country: 'MX'
 
}

console.log(obj1); //{ name: 'oscar', age: 32, country: 'MX' }

// Promise Finally

const helloWorld = () => {

    return new Promise((resolve, reject)=>{

        if(true){

            resolve('hello worl')
        }else{

            reject(new Error('Test Error'))
        }

    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    //Ya sea que la respuesta de nuestra promesa sea resuelta o  rechazada
    // Podremos concatenar un estado final para indicar que la promesa finalizo
    .finaly(()=> console.log('finalizo '))


    //Regex

    const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
    const match = regexData.exec('2018-04-28');
    const year = match[1];
    const month = match[2];
    const day = match[3];
    console.log('Date -> ', year, month, day);