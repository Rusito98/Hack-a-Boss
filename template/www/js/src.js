'use strict';

/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Dada una variable que almacene la hora:
 *
 * Según la hora, debe decir, "buenos días",
 *  "buenas tardes" o "buenas noches"
 */

let hora = 22;

if (hora > 6 && hora < 14) {
    console.log('Buenos días');
} else if (hora >= 14 && hora < 20) {
    console.log('Buenas tardes');
} else if (hora >= 20 && hora < 23) {
    console.log('Buenas noches');
} else {
    console.log('pa casita');
}

/* #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Crea una calculadora con "if" que opere con dos números. La calculadora
 * utilizará la variable "option" para decidir el tipo de operación a realizar.
 * Debe poder sumar, restar, multiplicar y dividir. A mayores debe permitir
 * elevar el nº A a la potencia de B.
 *
 * Bonus point: no se puede dividir entre 0.
 */

let a = 15;
let b = 0;
let option = '/';
let resultado = 'Resultado: ';

console.log(`${a}` + b);
console.log(a + b);
console.log(`suma = ${a + b}`);

if (option === '+') {
    resultado += a + b;
} else if (option === '-') {
    resultado += a - b;
} else if (option === '*') {
    resultado += a * b;
} else if (option === '/') {
    if (b <= 0) {
        resultado += 'No se puede dividir';
    } else {
        resultado += a / b;
    }
} else if (option === '**') {
    resultado += a ** b;
} else {
    resultado += 'Opción no válida';
}

console.log(resultado);

//Parentesis
//Potencias
// multiplicaciones y divisiones
//sumas y restas

// true && !(false || true)

/* #################
 * ## Ejercicio 5 ##
 * #################
 *
 * Crea una calculadora con "switch" que opere con dos números. La calculadora
 * utilizará la variable "option" para decidir el tipo de operación a realizar.
 * Debe poder sumar, restar, multiplicar y dividir. A mayores debe permitir
 * elevar el nº A a la potencia de B.
 *
 * Bonus point: no se puede dividir entre 0.
 */

let resultadoSwitch = '';

switch (option) {
    case '+':
        resultadoSwitch += a + b;
        break;
    case '-':
        resultadoSwitch += a - b;
        break;
    case '*':
        resultadoSwitch += a * b;
        break;
    case '/' /* 
        if (b <= 0) {
            resultadoSwitch += 'No se puede dividir';
        } else {
            resultadoSwitch += a / b;
        } */:
        switch (b) {
            case 0:
                resultadoSwitch += 'No se puede dividir';
                break;
            default:
                resultadoSwitch += a / b;
                break;
        }
        break;
    case '**':
        resultadoSwitch += a ** b;
        break;
    default:
        resultadoSwitch += 'opción no válida';
        break;
}

console.log(resultadoSwitch);

/* #################
 * ## Ejercicio 6 ##
 * #################
 *
 * Solicita a un usuario su nombre y su primer apellido. Posteriormente
 * pregúntale si le apetece un café.
 *
 *  - Si el usuario acepta mostraremos un mensaje del tipo: "¡Bienvenid@
 *    Juan Campos! En breves recibirá su café calentito en casa."
 *
 *  - Si el usuario no acepta: "¡Bienvenid@ Juan Campos! Para el que no quiere
 *    tengo yo mucho."
 *
 */

const nombre = prompt('Escribe tu nombre');
const apellido = prompt('Escribe tu apellido');
const cafe = confirm('¿Quieres café?');

if (cafe) {
    console.log(`Hola ${nombre} ${apellido}, tu café va en camino`);
} else {
    console.log(`Hola ${nombre} ${apellido}, tu te lo pierdes.`);
}

/* console.log(
    cafe ? `Hola ${nombre} ${apellido}, tu café va en camino` : `Hola ${nombre} ${apellido}, tu te lo pierdes.`
); */

console.log(
    confirm('¿Quieres café?')
        ? `Hola ${nombre} ${apellido}, tu café va en camino`
        : `Hola ${nombre} ${apellido}, tu te lo pierdes.`
);

const cantidad = prompt('Cuantos cafés quieres?');

if (cantidad) {
    console.log(`van tus ${cantidad} cafes`);
} else {
    console.log('no hay cafe para ti');
}

/* #################
 * ## Ejercicio 7 ##
 * #################
 *
 * Crea un conversor de modenas de euros a mínimo tres tipos de divisa diferentes.
 *
 *  El usuario será el que introduzca la cantidad a convertir y la divisa que prefiera.
 *
 * Si la divisa introducida no está entre nuestras opciones, se mostrará un mensaje
 * por consola indicando que la divisa no es válida
 *
 *  BONUS: Si la cantidad introducida no es un número se mostrará un mensaje por consola
 * indicando que la cantidad introducida no es válida.
 *
 * BONUS EXTRA: Si la cantidad o la divisa introducidas no son válidas se mostrará un aviso
 * por pantalla y se dará una oportunidad para corregirlo. Si acepta se volverá a preguntar
 * la canitdad / divisa y si rechaza se usará una por defecto.
 *
 *
 * CONSEJO: Utiliza comentarios para crear una lista con las divisas aceptadas
 * y sus equivalencias
 *
 */


'use strict' ;
function bomba(intentos){
    const password = Math.round(Math.random() + 10)
for (let i = 0; i < intentos; i++) {
    const intento = prompt ('Di un numero del 0 al 10');
    if (+intento === password) {
        return 'lo conseguiste' ;
    }  
    console.log('te quedan ${intentos - i - 1} intentos');
    }
    return 'exploto'
}
