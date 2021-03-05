'use strict';

//Comentario de linea (ctrl + shift + 7)
/* Comentario
de lineas multiples
(ctrl + shift + a) */

// Strings: cadenas de texto ("Palabras y eso")
// Number: numeros (4)
//Numeros especiales: son tipo number pero no son numeros: NaN, Infinity, -Infinity
//Boolean: valor binario, verdadero (true) o falso (false)
//Null y Undefined
//Undefined se genera solo (por ejemplo, por un error)
//Null lo especificamos manualmente para indicar que no tiene valor y es a proposito

//var está obsoleto
//usaremos let y const

let nombreVariable = 'valor'; //con let declaramos variables cuyo valor puede cambiar
const nombreConstante = 'valor que no cambia'; //con const el valor no puede cambiar

let edad = 26;
const nombre = 'Zoe';

console.log(edad, nombre);

edad = 27;

//No se puede cambiar una constante
/* nombre = 'Maria'; */

console.log(edad, nombre);

let valorSinDeclarar;

console.log(valorSinDeclarar);

valorSinDeclarar = 5;

console.log(valorSinDeclarar);

/* const constSinDeclarar;

console.log(constSinDeclarar);
 */

let loquesea = 5;
let precioBocata = 5;
let cantidad = 3;

/* const VALOR_FIJO = "valor" */

/* Los nombres de variables pueden tener letras minusculas y mayusculas, números y $ y _
Aunque pueden tener números, el primer caracter no pude ser un número.
Por convencion, empiezan por letra minúscula. 
$ y _ son para casos especiales y mayúscula para nombres clase
tambien por convencion se escriben en camelCase
los nombres siempre deben ser descriptivos
*/

console.log(precioBocata * cantidad);

///////////////////////

let variable1 = 'algo',
    variable2 = 'otra cosa';

let variable3 = 'algo más',
    variable4 = 'otro texto';

console.log(variable1, variable2, variable3, variable4);

let variable5, variable6, variable7;
variable5 = variable6 = variable7 = 'valor comun';

console.log(variable5, variable6, variable7);

let a = 5;
let numB = 8;

console.log(a, numB);

/* a = b; */
numB = a;
console.log(a, numB);

////// Concatenacion

let palabra1 = 'Hello';
let palabra2 = 'world';

console.log(palabra1 + '            ' + palabra2 + '!');
console.log('Hello ' + palabra2 + '!');

let frase = `Esto es un string nomal
aunque puede tener varias lienas
y llevar variables ${palabra1} ${palabra2}! ${a}`;

//Tamplate string
console.log(frase);

console.log(typeof frase, typeof a);
