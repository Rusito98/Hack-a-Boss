'use strict';

/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea una variable que almacene tu nombre y otra variable que almacene
 * tu número favorito.
 *  - Muestra ambos valores por consola.
 *  - Cambia tu nº favorito por cualquier otro nº.
 *  - Muestra por consola el resultado del cambio.
 *  - Muestra por consola el tipo de las variables definidas.
 */

const miNombre = 'Zoe';
let numero = 4;
let miFrase = `Me llamo ${miNombre} y mi número favorito es el ${numero}`;

console.log(miFrase);
numero = 2;
miFrase = `Me llamo ${miNombre} y mi número favorito es el ${numero}`;

console.log(miFrase);
console.log(typeof miNombre, typeof numero);

/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Dado el valor "num_a = 8" y "num_b = 2":
 *  - Muestra por consola la suma de A + B.
 *  - Muestra el resto de dividir A entre B.
 *  - Muestra el resultado de elevar A a B.
 */

const numeroA = 8,
    numB = 2;

//numA != numa

console.log(numeroA + numB, numeroA % numB, numeroA ** numB);

/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Dada una variable que almacene la hora:
 *
 * Según la hora, debe decir, "buenos días",
 *  "buenas tardes" o "buenas noches"
 */

let hora = 14;

if (hora > 4 && hora < 14) {
    console.log('Buenos días');
} else if (hora >= 14 && hora < 20) {
    console.log('buenas tardes');
} else {
    console.log('buenas noches');
}
