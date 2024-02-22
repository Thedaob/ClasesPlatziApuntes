// 1. Tipo entero y decimal
const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal)

// 2. Notacion cientifica
const cientifico = 5e3

// 3. Infinitos y NaN
const infinito = Infinity
const noEsUnNumero = NaN

// Operaciones aritmeticas 

// 1. Suma, Resta, Mutiplicacion y Division
const suma = 3 + 4
const resta = 4 - 4
const mutiplicacion = 4 * 7
const division = 16 / 2

// 2. modulo y Exponenciacion
const modulo = 15 % 8
const exponenciacion = 2 ** 3

// Presicion
const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1)) //reduce los 0.000000
console.log(resultado === 0.3) //está comparando un numero y el tipo de dato

// Operaciones Avanzadas
const raizCuadrada = Math.sqrt(16) 
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)



____________________

const isActive=true
const hasPermisson=false
const result=5>3
console.log(result)
const name='Platzi'
console.log(!!name)
const value=0
const otherValue=-24
const explicitBoolean=Boolean(otherValue)
console.log(explicitBoolean)
