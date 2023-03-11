/*

01 - Jogo de fantasia

Você é responsável pelo sistema de um novo jogo de fantasia medieval.

Escreva um algoritmo que recebe o nome da classe e retorne os pontos de vida do(a) personagem, com base na tabela a seguir:

|   Classe     |   Pontos de Vida   |

|    Mago      |        5PV         |
|   Arqueiro   |        10PV        |
|   Guerreiro  |        15PV        |
|   Cavaleiro  |        20PV        |

Por exemplo:
------------
Entrada:
"Mago"'

Saída:
"Mago, 5PV"
------------

Desafio: faça sem usar estruturas condicionais (ifs ou switches) 

*/

const obj = [
    { classe: 'Mago', PV: '5PV'},
    { classe: 'Arqueiro', PV: '10PV'},
    { classe: 'Guerreiro', PV: '15PV'},
    { classe: 'Cavaleiro', PV: '20PV'},
]


function fantasyGame(className) {
    const matchingObj = obj.find(({classe}) => classe === className);
    return matchingObj ? `${matchingObj.classe}, ${matchingObj.PV}` : '';
}

console.log(fantasyGame('Mago'))

module.exports = fantasyGame;
