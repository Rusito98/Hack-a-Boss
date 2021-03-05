'use strict';

///// OPERADORES /////

//Operadores artmeticos
//Para realizar operaciones matemáticas

// a + b
// a - b
// a * b
// a / b
// a % b // devuelce el RESTO de dividir a / b
// a ** b // a elevado a b
// a += b // a = a+b
// a -= b // a = a-b
// a *= b
// a /= b
// a %= b

// a++ // a = a + 1
// a-- // a = a - 1

let a = 3;
let b = '2';
a *= b;

console.log(a);

//// Operadores lógicos
// Para comparar o evaluar valores

// a === b //Comparacion (igual) estricta
console.log('igual con coercion', 2 == '2'); //comparacion no estrica, con coerción de tipos;
console.log('igual estricto', 2 === '2'); //comparacion estricta

// a!== b; //Comparacion (diferente) estricta
console.log('distinto con coercion', 2 != '2'); //comparacion no estrica, con coerción de tipos;
console.log('distinto estricto', 2 !== '2'); //comparacion estricta

// a > b // mayor estricto
console.log('mayor estricto', 2 > 2);

// a < b // menor estricto
console.log('menor estricto', 2 < 2);
// a >= b // mayor o igual
console.log('mayor o igual', 2 >= 2);
// a <= b // menor o igual
console.log('menor o igual', 2 <= 2);
// a && b // AND: Devuelve true si TODOS los valores son true

console.log('true && true', true && true);
console.log('true && false', true && false);
console.log('false && true', false && true);
console.log('false && false', false && false);

// a || b // OR: Devuelve true si ALGUN valor es true

console.log('true || true', true || true);
console.log('true || false', true || false);
console.log('false || true', false || true);
console.log('false || false', false || false);

// !a // Negación. Devuelve el valor booleano opuesto
console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);

// +a //transforma a numero

// Coercion de tipos y concatenacion

console.log(2 * '2');
console.log(2 + '2');
console.log(1 + '1' + 1);
console.log(1 + 1 + '1');

//Conversion
let numeroString = '1.5';
console.log(1 + numeroString);
console.log(1 + parseInt(numeroString));
console.log(1 + parseFloat(numeroString));
console.log(1 + +numeroString);
