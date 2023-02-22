/*

03 - Array de notas musicais

Uma música normalmente possui uma sequência de notas.

Data a escala natural de Dó, cada uma das 7 notas possui um grau representado por um algarismo romano conforme abaixo:

| Dó | Ré | Mi  | Fá | Sol | Lá | Si  |
| I  | II | III | IV |  V  | VI | VII |

Escreva um algoritmo que recebe um array de notas e retorne um outro array com os respectivos graus da escala de Dó.

Por exemplo:
----------------------------
Entrada:
['Ré', 'Sol', 'Dó']

Saída:
['II', 'V', 'I']
----------------------------

 */

const vals = {
    Do: 'I',
    Re: 'II',
    Mi: 'III',
    Fa: 'IV',
    Sol: 'V',
    La: 'VI',
    Si: 'VII'
}

function musicalNotes(notes) {
    const notesWithNoAccentuation = notes.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    const hasValue = vals.hasOwnProperty(`${notesWithNoAccentuation}`)
    if (hasValue) {
        return vals[notesWithNoAccentuation];
    }
    return 'Invalid note';
}

module.exports = musicalNotes;
