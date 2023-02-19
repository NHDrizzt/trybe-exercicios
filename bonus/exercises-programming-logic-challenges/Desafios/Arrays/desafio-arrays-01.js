/*

01 - Encontre o maior número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o maior valor e o retorne.

*/

function getMaxNumber(numbers) {
  return Math.max(...numbers)
}

module.exports = getMaxNumber;
