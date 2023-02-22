/*

05 - Varinhas mágicas

Você foi a pessoa designada para escrever um novo sistema para Olivaras, o fabricante de varinhas mágicas.

Como se sabe, a varinha escolhe o(a) bruxo(a), então você deverá criar um algoritmo que recebe o nome da pessoa aspirante e o nome da varinha a ser testada.

Considere a seguinte tabela:

|       Bruxo(a)           |               Varinha               |

|    Harry Potter          |    Azevinho e Pena de Fênix         |
|    Rony Weasley          |    Salgueiro e Pelo de Unicórnio    |
|    Hermione Granger      |    Videira e Fibra de Dragão        |
|    Alvo Dumbledore       |    Salgueiro e Pelo de Testrálio    |
|    Belatriz Lestrange    |    Nogueira e Fibra de Dragão       |

Se a varinha escolher a pessoa aspirante de acordo com a tabela, retorne:
-----------------------------
"Curioso... muito curioso..."
-----------------------------

Caso o contrário:
--------------------------------
"Não, não! Decididamente, não.!"
--------------------------------

Desafio: faça usando apenas um único IF acompanhado por um único Else.

*/
const bruxos = [
        {
          nome: 'Harry Potter',
          varinha: 'Azevinho e Pena de Fênix',
        },
        {
            nome: 'Rony Weasley',
            varinha: 'Salgueiro e Pelo de Unicórnio',
        },
        {
            nome: 'Hermione Granger',
            varinha: 'Videira e Fibra de Dragão',
        },
        {
            nome: 'Alvo Dumbledore',
            varinha: 'Salgueiro e Pelo de Testrálio',
        },
        {
            nome: 'Belatriz Lestrange',
            varinha: 'Nogueira e Fibra de Dragão',
        },
    ]

function magicWand(wizard, wand){
    const result = bruxos.find(item => item.nome === wizard && item.varinha === wand);
    if (result) {
        return 'Curioso... muito curioso...';
    } else {
        return 'Não, não! Decididamente, não!';
    }
}

magicWand('Harry Potter', 'Azevinho e Pena de Fênix');

module.exports = magicWand;
