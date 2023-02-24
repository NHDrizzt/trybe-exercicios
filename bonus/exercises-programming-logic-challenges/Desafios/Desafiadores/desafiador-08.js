/*

08 - O número de empates na Copa das galáxias

Uma Copa de futebol de botão está sendo realizada com equipes de toda a galáxia.

A classificação dessa Copa é baseada no número de pontos ganhos pelas equipes, e a distribuição de pontos é feita da forma usual, por exemplo:

* quando uma equipe ganha um jogo, ela recebe 3 pontos;
* se o jogo termina empatado, ambas as equipes recebem 1 ponto;
* a equipe perdedora não recebe nenhum ponto.

Escreva um algoritmo que recebe a quantidade de partidas jogadas e um objeto no qual as chaves são os nomes dos times e os valores a pontuação alcançada por cada um e retorne a quantidade de partidas empatadas.

*/
const test8 = {
    liverpool: 4,
    chelsea: 1,
    arsenal: 4,
    city: 1,
};

function numberTies(matches, scores){
    const sumPoints = Object.values(scores).reduce((sum, number) => sum + number);
    return Math.abs(3 * matches - sumPoints);
}

console.log(numberTies(2, test8))

module.exports = numberTies;
