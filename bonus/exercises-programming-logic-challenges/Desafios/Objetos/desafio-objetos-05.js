/*

05 - Jogo de fantasia- Parte 3

Você está desenvolvendo um jogo que lida com personagens em diferentes níveis de experiência.
 
Considere tabela:
|   Classe      |   PV Inicial   |   PV por Nível   |   Equipamento Inicial   |

|    Mago       |      5PV       |      +2PV        |         Varinha         |
|   Arqueiro    |      10PV      |      +3PV        |        Arco Curto       |
|   Guerreiro   |      15PV      |      +4PV        |          Espada         |
|   Cavaleiro   |      20PV      |      +5PV        |     Armadura Completa   |

Obs: PV = Pontos de Vida.

Considere as regras:
* Cada personagem receberá no nível 1 o PV inicial;
* Cada personagem terá seu equipamento inicial relacionado à classe;
* A cada nível após o primeiro, cada personagem ganha uma quantidade de PV de acordo com a classe.

Escreva um algoritmo que receba o nome de uma classe e um nível (maior que 0), e retorne o total de Pontos de Vida (inicial + por  nível) e o equipamento do(a) personagem.

Reforme nos padrões dos exemplo baixo:

Exemplo 1:
-----------------------------------------------------------------
Entradas:
"Mago", 2

Saída:
"Mago, nível 2: 7PV, varinha."


Exemplo 2:
-----------------------------------------------------------------
Entradas:
"Cavaleiro", 4

Saída:
"Cavaleiro", nível 4: 35PV, Armadura Completa."

Desafio: faça sem usar estruturas condicionais (ifs ou switches).
-----------------------------------------------------------------

*/

const obj = [
    { classe: 'Mago', PV: '5PV', pvnivel: '+20PV', equipamento: 'Varinha'},
    { classe: 'Arqueiro', PV: '10PV', pvnivel: '+3PV', equipamento: 'Arco Curto'},
    { classe: 'Guerreiro', PV: '15PV', pvnivel: '+4PV', equipamento: 'Espada'},
    { classe: 'Cavaleiro', PV: '20PV', pvnivel: '+5PV', equipamento: 'Armadura Completa'},
]


function fantasyGame3(className, level) {
  const findClass = obj.find(({classe}) => classe === className);
  const newPV = parseFloat(findClass.PV.match(/\d+/g).toString());
    const newPvNivel = parseFloat(findClass.pvnivel.match(/\d+/g).toString());
  const newPv2 = (newPvNivel * level) - newPvNivel;
  return `${findClass.classe}, nivel ${level}, ${newPV + newPv2}, ${findClass.equipamento}`
}

console.log(fantasyGame3('Mago', 4))

module.exports = fantasyGame3;
