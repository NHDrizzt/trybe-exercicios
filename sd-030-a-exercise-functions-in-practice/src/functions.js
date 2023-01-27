// 1 - Crie a função ligarDesligar, que ligue e desligue um motor de um carro.

const ligarDesligar = (valor) => {
  let status = valor === 'ligado' ? 'desligado' : 'ligado';
  console.log(`O motor está ${status}`);
  return status;
};

// 2 - Crie a função circleArea, que calcule a área de um círculo.

const circleArea = (raio) => {
  let pi = 3.14;
  if (typeof raio !== 'number') {
    return 'O parâmetro radius deve ser um número';
  }
  return `Essa é a área do círculo: ${pi * raio ** 2}`;
};

// 3 - Crie a função longestWord, que receba uma frase como parâmetro e retorne a maior palavra da frase.

const longestWord = (frase) => {
  let newSplit = frase.split(' ');
  let maxValue = 0;
  let huge;
  for (let index = 0; index < newSplit.length; index += 1) {
    if (newSplit[index].length > maxValue) {
      maxValue = newSplit[index].length;
      huge = newSplit[index];
    }
  }
  return huge;
};

// Não modifique as linhas abaixo
module.exports = {
  ligarDesligar: typeof ligarDesligar === 'function' ? ligarDesligar : () => {},
  circleArea: typeof circleArea === 'function' ? circleArea : () => {},
  longestWord: typeof longestWord === 'function' ? longestWord : () => {},
};
