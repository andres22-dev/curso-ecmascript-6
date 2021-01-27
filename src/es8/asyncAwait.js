const helloWorld = () =>{

    return new Promise((resolve, reject) =>{

        if(true){

            setTimeout(()=> resolve('Hello World'), 3000)
        }else{

            reject(new Error('Test Error'));
        }

    })

}

//Creamos una funcion y se la asignamos a una variable 
// Y anteponemos la palabra async para indicar que es una funcion asincrona
const helloAsyc = async () =>{

    //Asignamos la funcion que retona la promesa a una variable
    // Anteponiendo el await para que para la ejecucion del programa hasta 
    // que tenga la respuesta de la promesa
    const hello = await helloWorld();
    // Podremos tener varias variables donde vamos a hacer varios llamados
    // Y con el await esperamos a que se resuelvan
    const hello2 = await helloWorld();


}

// invocamos la funcion

    helloAsyc();

// Otra forma de trabajar con async y await TRY CATCH!!


    const  anotherFunction = async () =>{

        try{
            const hello = await helloWorld();
            console.log(hello);

        }catch(error){


            console.log(error)



        }
    }
    anotherFunction();