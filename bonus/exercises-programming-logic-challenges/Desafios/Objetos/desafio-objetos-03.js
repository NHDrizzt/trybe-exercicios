/*

03 - Escala musical

Dada a escala maior natural de Dó, cada uma das 7 notas possui um grau, representado por um algarismo romano:

| Dó | Ré | Mi  | Fá | Sol | Lá | Si  |
| I  | II | III | IV |  V  | VI | VII |

Escreva um algoritmo que recebe uma nota e retorne o grau dessa nota na escala de Dó.

Por exemplo:
---------------
Entrada:
"Dó"

Saída:
"I"
---------------

Desafio: faça sem usar estruturas condicionais (ifs ou switches).

*/

const obj = {
    Do: 'I',
    Re: 'II',
    Mi: 'III'
}

function musicalScale(note) {
  return obj[note];
}

console.log(musicalScale('Do'))

module.exports = musicalScale;
