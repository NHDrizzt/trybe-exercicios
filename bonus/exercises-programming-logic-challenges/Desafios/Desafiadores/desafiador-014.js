/*

14 - Soma de números primos

Escreva um algoritmo que some números primos de 0 à 150 e retorne o resultado. 

*/

function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

function createArray(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(i)
    }
    return arr;
}

function sumPrimesNumbers(){
    let arr = createArray(150);
    return arr.filter(isPrime).reduce((acc, cur) => acc + cur)
}

console.log(sumPrimesNumbers())

module.exports = sumPrimesNumbers;
