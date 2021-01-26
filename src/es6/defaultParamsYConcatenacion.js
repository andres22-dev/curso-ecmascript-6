//Parametros por defecto podremos establecer parametros iniciales a las funciones

function newFunction(name, age, country){

    //asginamos el valor por defecto al que le indicamos que podria ser el parametro
    //la variable o el valor que le asignamos
    var name = name || 'oscar';
    var age = age || 32;
    var country = confirm || 'MX'
    console.log(name, age, country)

}

// es6
    // Con ecmascript 6 podremos establecer los valores a los parametro
    // desde que los establecemos en la funcion
    function newFunction2(name = 'oscar', age = 32, country = 'MX'){

        console.log(name,age,country);
    }

    //Invocamos la funcion y si no le paso ningun parametro, va a poner los que tiene por defecto.

    newFunction2();  //'oscar', 32, 'MX'
    newFunction2('Ricardo', 23, 'CO')

    //Concatenacion
    
    let hello = "Hello";
    let world = 'World';
    let epicPhrase = hello+' '+world;
    console.log(epicPhrase);

    //Es6 Template Literal De esta forma podremos concatenar variables y tener espacios
    // de forma mas comoda.

    let epicPhrase2 = `${hello} ${world}`;
    console.log(epicPhrase2)