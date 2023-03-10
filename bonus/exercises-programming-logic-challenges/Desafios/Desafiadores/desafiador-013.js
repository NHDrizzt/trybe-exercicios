/*

13 - Fibonacci

A sequência de números 0 1 1 2 3 5 8 13 21...n é conhecida como sequência de Fibonacci.

Nessa sequência, cada número, depois dos 2 primeiros é igual à soma dos 2 anteriores.

Escreva um algoritmo que recebe um valor n que corresponde ao enésimo número da sequência e retorne o enésimo número da sequência de Fibonnaci.

Por exemplo:
------------
Entrada:
5

Saída:
3
------------

*/

function fibonnaci(n){
    if (n === 1) return 0;
    if (n === 2) return 1;
    if (n === 3) return 1;
    
    let arr = [0, 1]
    
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    
    return arr[n-1]
}

module.exports = fibonnaci;
