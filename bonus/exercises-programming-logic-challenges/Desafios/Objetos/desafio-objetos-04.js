/*

04 - Quem é a pessoa mais velha?

Dado um array de pessoas, escreva um algoritmo que identifique qual tem a maior idade e retorne o nome da pessoa e sua idade.

O array terá o seguinte formato:
people = [
  { name: 'Ramon', age: 35 },
  { name: 'José', age: 28 },
  { name: 'Amanda', age: 19 }
];

O retorno deve ser no seguinte formato:
---------------------------------
"x tem a maior idade com y anos."
---------------------------------

*/

const people = [
    { name: 'Ramon', age: 35 },
    { name: 'José', age: 28 },
    { name: 'Amanda', age: 19 }
];

function getOldPerson(arrPeople) {
  return arrPeople.reduce((acc, {age}) => ((acc > age) ? acc : age), 0)
}

console.log(getOldPerson(people))

module.exports = getOldPerson;
