//sorteador de loteria
const someHof = (num) => num === Math.floor(Math.random() * 5) + 1

const sorteio = (num, someHof) => someHof(num) ? 'Parabéns, você ganhou!' : 'Tente novamente'

console.log(sorteio(4, someHof))