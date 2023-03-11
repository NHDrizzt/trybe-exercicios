/*

02 - Jogo de fantasia- Parte 2

Além dos pontos de vida (PV), será necessário estipular o equipamento inicial do(a) personagem. 

Tudo isso deve ser feito no mesmo código, seguindo a seguinte tabela:

|   Classe     |   Pontos de Vida   |   Equipamento Inicial   |

|    Mago      |        5PV         |         Varinha         |
|   Arqueiro   |        10PV        |        Arco Curto       |
|   Guerreiro  |        15PV        |          Espada         |
|   Cavaleiro  |        20PV        |     Armadura Completa   |


Escreva um algoritmo que recebe o nome de uma classe e retorne os pontos de vida e o equipamento inicial do(a) personagem.

Por exemplo:
---------------
Entrada:
"Guerreiro"

Saída:
"15PV, Espada."
---------------

Desafio: faça sem usar estruturas condicionais (ifs ou switches).

*/

const obj = [
    { classe: 'Mago', PV: '5PV', equipamento: 'Varinha'},
    { classe: 'Arqueiro', PV: '10PV', equipamento: 'Arco Curto'},
    { classe: 'Guerreiro', PV: '15PV', equipamento: 'Espada'},
    { classe: 'Cavaleiro', PV: '20PV', equipamento: 'Armadura Completa'},
]


function fantasyGame2(className) {
    const findClass = obj.find((item) => item.classe === className)
    return findClass ? `${findClass.PV}, ${findClass.equipamento}` : '';
}

console.log(fantasyGame2('Guerreiro'))

module.exports = fantasyGame2;
