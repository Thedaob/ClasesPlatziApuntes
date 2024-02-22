//String primitivos

  const stringPrimitivo = 'Soy un string primitivo'
  const stringPrimitivoTambien = String('Soy un string primitivo tambien')


// String objeto agregnado "new"
    const stringObjeto = new String('Soy un string objeto')
    console.log(typeof stringObjeto)

    //manipulaicon de string objetos
    
const saludo = 'Hola. ¿Como estás?'

console.log(saludo[2])        //Acceder a caracteres 
console.log(saludo.charAt(2))
console.log(saludo.indexOf('o'))  //que nos indique el numero del caracter
console.log(saludo.indexOf('Como'))
console.log(saludo.indexOf('como')) //esta palabro no existe en la oracion por eso el valor es -1
console.log(saludo.lastIndexOf('o')) //saber la ultima posicion, en este caso de la o
console.log(saludo.slice(3, 5)) //saber las letras entre un caracter y otro. 
console.log(saludo.length) //saber la longitud de un string 
console.log(saludo.toLocaleUpperCase()) //todo en mayusculas
console.log(saludo.toLocaleLowerCase()) // todo en minusculas

______________________________________________________
const saludoDividido = saludo.split(' ')
console.log(saludoDividido)  //"hacer una division, en forma de array"
console.log(saludoDividido[1]) //"Acceder a la posicion en este caso 1 que es hola" 

const saludoConEspacios = ' Hola Mundo ' 
const saludoSinEspacios = saludoConEspacios.trim() //"Quitar espacios a un string"
console.log(saludoSinEspacios)

const saludoOriginal = 'Hola Mundo'  
const nuevoSaludo = saludoOriginal.replace('Mundo', 'yuca') //"reemplazar una parte del string en este caso cambia mundo x yuca"
console.log(nuevoSaludo)




