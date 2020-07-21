const  andres = {

    name: 'andres',
    apellido: 'pinchao',
    edad: 18,

};




const  felipe = {

    name: 'laura',
    apellido: 'pinchao',
    edad: 16,

};


const mayorDeEdad = (persona) => {

  return new Promise((resolve,reject) => {
 
  if(persona.edad >= 18){

    console.log(`${persona.name} es mayor de edad `);
    resolve();
  }else{

   console.log(`${persona.name} es menor de edad`)

   reject();
  }

  });

}


mayorDeEdad()
 .then((respuesta)=>{
 
  respuesta === true;

 })
 .cart((error)=>{

  error === false;

 })