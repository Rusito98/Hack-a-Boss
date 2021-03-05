'use strict';

////// CONDICIONALES //////

// Sentencias if

let edad = 75;

console.log(edad >= 18);

if (edad >= 18 === true) {
    /* llega con (edad >= 18) */ console.log('es mayor de edad');
} else {
    console.log('es menor de edad');
}

// Truthy o falsy
// Todo evalua a true, excepto false, 0, null, undefined, NaN y ""

let usuario = 'Zoe';

console.log(!!usuario);

if (usuario) {
    console.log('bienvenid@, ' + usuario);
} else {
    console.log('No estás logeado');
}

let booleanoComplejo = 6 - 6;
console.log(!!booleanoComplejo);

// else if

if (edad < 18) {
    /* llega con (edad >= 18) */ console.log('es menor de edad');
} else if (edad >= 18 && edad < 70) {
    console.log('Está en edad de trabajar');
} else {
    console.log('está jubilado');
}

if (edad < 16 || edad > 70) {
    console.log('No trabaja');
} else {
    console.log('está en edad de trabajar');
}
