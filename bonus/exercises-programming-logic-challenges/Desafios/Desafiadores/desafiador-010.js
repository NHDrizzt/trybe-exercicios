/*

10 - Nega Números

Escreva uma algoritmo que recebe um array de números, retorne uma cópia do array com todos os números negados.

Por exemplo:
--------------
Entrada:
[2 ,-3 ,4 ]

Saída:
[-2, 3 ,-4 ]
--------------

*/

function negateNumbers(numbers){
    let ans = []
      numbers.forEach( item => {
          item *= -1;
          ans.push(item)
      })
    return ans;
}

module.exports = negateNumbers;
