/* Não entendi o que é para fazer no 15 */

// 15 - Fatorial e média

/*

Faça uma função que calcule o fatorial de um número recebido por parâmetro e em seguida, utilize-a para fazer a função que calcula a média dos fatoriais de A a B,
sendo A e B números inteiros maiores ou iguais a 0.
A média deve ter até 2 casas decimais de precisão.
*/

function factorial15(number) {
  let result = 1;
  while(number>=1) {
    result *= number
    number--
  }
  return result;
}

function meanFactorialFromAToB(a, b) {
  let arr = []
  for (let i = a; i <= b; i++) {
    arr.push(factorial15(i))
  }
  return parseFloat((arr.reduce((acc, cur) => acc + cur) / arr.length).toFixed(2))
}

module.exports = {
  factorial15,
  meanFactorialFromAToB,
};
