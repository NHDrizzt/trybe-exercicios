const arrayComRespostaCorreta = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostaFornecida = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const comparaArray = (arrayComRespostaCorreta, respostaFornecida) => {
    let num = 0;
    arrayComRespostaCorreta.forEach((item, index) => {
        if(item === respostaFornecida[index]) {
            num += 1
        } else if (item !== respostaFornecida[index] && respostaFornecida[index] !== 'N.A') {
            num -= 0.5
        }
    })
    return num
}

const someHof = (arrayComRespostaCorreta, respostaFornecida, comparaArray) => {
    return comparaArray(arrayComRespostaCorreta, respostaFornecida)
}

console.log(someHof(arrayComRespostaCorreta, respostaFornecida, comparaArray))