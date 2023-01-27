// Bonus  Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
const myObject = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

function romanoParaDecimal(number) {
  number = number.toLowerCase();
  let len = number.length;
  let soma = myObject[number[len - 1]];
  let atual = myObject[number[len - 1]];
  for (let i = 2; i <= len; i += 1) {
    const prox = myObject[number[len - i]];
    if (atual <= prox) {
      soma += prox;
    } else {
      soma -= prox;
    }
    atual = prox;
  }
  return soma;
}

console.log(romanoParaDecimal("VI"));
console.log(romanoParaDecimal("XV"));

// Bonus 2 separe os valores pares do vetor
let vector = [
  [1, 2],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
];
let array = [];
function arrayOfNumbers(vector) {
  for (const iterator of vector) {
    for (const value of iterator) {
      value % 2 === 0 ? array.push(value) : console.log(value);
    }
    console.log(iterator);
  }
  return array;
}

console.log(arrayOfNumbers(vector));

// Bonus 3

const basket = [
  "Melancia",
  "Abacate",
  "Melancia",
  "Melancia",
  "Uva",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Uva",
  "Laranja",
  "Melancia",
  "Banana",
  "Uva",
  "Pera",
  "Abacate",
  "Laranja",
  "Abacate",
  "Banana",
  "Melancia",
  "Laranja",
  "Laranja",
  "Jaca",
  "Uva",
  "Banana",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Uva",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Melancia",
  "Melancia",
  "Laranja",
  "Pera",
  "Banana",
  "Jaca",
  "Laranja",
  "Melancia",
  "Abacate",
  "Abacate",
  "Pera",
  "Melancia",
  "Banana",
  "Banana",
  "Abacate",
  "Uva",
  "Laranja",
  "Banana",
  "Abacate",
  "Uva",
  "Uva",
  "Abacate",
  "Abacate",
  "Melancia",
  "Uva",
  "Jaca",
  "Uva",
  "Banana",
  "Abacate",
  "Banana",
  "Uva",
  "Banana",
  "Laranja",
  "Laranja",
  "Jaca",
  "Jaca",
  "Abacate",
  "Jaca",
  "Laranja",
  "Melancia",
  "Pera",
  "Jaca",
  "Melancia",
  "Uva",
  "Abacate",
  "Jaca",
  "Jaca",
  "Abacate",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Jaca",
  "Pera",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Jaca",
  "Banana",
  "Laranja",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Uva",
];

const result = {};

for (const key in basket) {
  if (!result[basket[key]]) {
    result[basket[key]] = 0;
  }
  result[basket[key]] += 1;
}
console.log(result);

for (const iterator in result) {
  console.log(`Sua cesta possui: ${result[iterator]} ${iterator}`);
}

// Bonus 4

let moradores = {
  blocoUm: [
    {
      nome: "Luiza",
      sobrenome: "Guimarães",
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: "William",
      sobrenome: "Albuquerque",
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: "Murilo",
      sobrenome: "Ferraz",
      andar: 8,
      apartamento: 804,
    },
    {
      nome: "Zoey",
      sobrenome: "Brooks",
      andar: 1,
      apartamento: 101,
    },
  ],
};

console.log(
  `O morador do bloco 2 de nome ${moradores.blocoDois[1].nome} ${moradores.blocoDois[1].sobrenome} mora no ${moradores.blocoDois[1].andar} andar, apartamento ${moradores.blocoDois[1].apartamento}`
);

for (const key in moradores) {
    console.log(`Moradores do ${key}:`);
    for (const iterator of moradores[key]) {
        if (key === "blocoUm") {
            console.log(`${iterator.nome} ${iterator.sobrenome}`);
        }
        else {
            console.log(`${iterator.nome} ${iterator.sobrenome}`);
        }
    }
  }

  for (const iterator of moradores.blocoUm) {
    console.log(iterator.nome + ' ' + iterator.sobrenome);
  }

  for (const iterator of moradores.blocoDois) {
    console.log(iterator.nome + ' ' + iterator.sobrenome);
  }

  
