// Requisito 1 - Crie a função verificaPalindromo

const verificaPalindromo = (text) => text.split('').reverse().join('') === text;

// Requisito 2 - Crie a função indiceDoMaior

const indiceDoMaior = (object) => {
  let maxValue = 0;
  let ans = 0;
  for (const iterator of object) {
    if (iterator > maxValue) {
      maxValue = iterator;
      ans = object.indexOf(maxValue);
    }
  }
  return ans;
};

// Requisito 3 - Crie a função indiceDoMenor

const indiceDoMenor = (object) => {
  let maxValue = Number.MAX_VALUE;
  let ans = 0;
  for (const iterator of object) {
    if (iterator < maxValue) {
      maxValue = iterator;
      ans = object.indexOf(maxValue);
    }
  }
  return ans;
};

// Requisito 4 - Crie a função maiorPalavra

const maiorPalavra = (object) => {
  let maiorNumero = 0;
  let palavraMaior = '';
  for (const iterator of object) {
    if (iterator.length > maiorNumero) {
      maiorNumero = iterator.length;
      palavraMaior = iterator;
    }
  }
  return palavraMaior;
};

// Requisito 5 - Crie a função maisRepetido

const checkIterator = (iterator, object) => {
  let counter = 0;
  for (const iterator2 of object) {
    if (iterator === iterator2) {
      counter += 1;
    }
  }
  return counter;
};

const maisRepetido = (object) => {
  let aux = 0;
  let maisRep = 0;
  for (const iterator of object) {
    let counter = checkIterator(iterator, object);
    if (aux < counter) {
      aux = counter;
      maisRep = iterator;
    }
  }
  return maisRep;
};

// Requisito 6 - Crie a função somatorio

const somatorio = (number) => {
  let sum = 0;
  for (let index = 1; index <= number; index += 1) {
    sum += index;
  }
  return sum > 0 ? sum : 'ERRO';
};

// Requisito 7 - Crie a função verificaFimPalavra

const verificaFimPalavra = (palavra1, palavra2) => palavra1.endsWith(palavra2);

// Não modifique essas linhas
module.exports = {
  verificaPalindromo:
    typeof verificaPalindromo === 'function' ? verificaPalindromo : () => {},
  indiceDoMaior: typeof indiceDoMaior === 'function' ? indiceDoMaior : () => {},
  indiceDoMenor: typeof indiceDoMenor === 'function' ? indiceDoMenor : () => {},
  maiorPalavra: typeof maiorPalavra === 'function' ? maiorPalavra : () => {},
  maisRepetido: typeof maisRepetido === 'function' ? maisRepetido : () => {},
  somatorio: typeof somatorio === 'function' ? somatorio : () => {},
  verificaFimPalavra:
    typeof verificaFimPalavra === 'function' ? verificaFimPalavra : () => {},
};
