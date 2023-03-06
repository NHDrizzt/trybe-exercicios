/*

12 - Fatorial

Escreva um algoritmo que recebe um número n e calcule e retorne o seu fatorial.

*/

function factorial(n) {
    let result = 1;
    while(n>1) {
        result *= n
        n--
    }
    return result;
}

module.exports = factorial;
