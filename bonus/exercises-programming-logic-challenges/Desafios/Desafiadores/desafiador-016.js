/*

16 - Validação de CPF

Escreva uma algoritmo que recebe uma string no formato de um CPF `xxx.xxx.xxx-xx` e verifica se o mesmo é válido.

Considere um CPF com os seguintes dígitos: `abc.def.ghi-jk`

Para descobrirmos o primeiro dígito verificador `j`, procedemos da seguinte maneira: multiplicamos o primeiro dígito por 1, 
o segundo por 2, o terceiro por 3, o quarto por 4 e vamos assim até multiplicarmos o nono por 9. Então, somamos tudo isso. 
Em seguida, devemos obter o resto da divisão dessa soma por 11.
Caso o resto seja 10, o dígito `j` deve ser igual a 0. 

Para o segundo dígito verificador `k`, temos o seguinte: multiplicamos o segundo digito por 1, o terceiro por 2, o quarto por 3 
e vamos assim até multiplicarmos o décimo (primeiro dígito verificador) por 9. Então, somamos tudo isto. O dígito `k` será o 
resto da divisão dessa soma por 11.
Caso o resto seja 10, o dígito `k` deve ser igual a 0. 

Sabendo que isso vale para 100% dos CPFs, sua missão é implementar uma função que, dado um CPF, diga se ele é válido ou não.


***Importante***:
Uma sequência de números iguais, como por exemplo `'000.000.000-00'`, também é um CPF inválido 😉 

Exemplo De CPF Válido:
----------------------
Entrada:
"397-606-448-34"

Saída:
"CPF inválido"
----------------------

Exemplo De CPF Inválido:
------------------------
Entrada:
"166.354.840-43"

Saída: "CPF válido"
------------------------

*/

function checkIfEqual(numbersOnlyCpf) {
    const firstValue = numbersOnlyCpf[0];
    return !numbersOnlyCpf.every((item) => item === firstValue)
}

function calcCpfFirstDigit(cpfArray) {
    const sum = cpfArray
        .slice(0, 9)
        .reduce((sum, number, index) => sum + number * (index + 1), 0);
    const rest = sum % 11;
    if (rest === 10) {
        return 0;
    }
    return rest;
}
function calcCpfSecondDigit(cpfArray) {
    const sum = cpfArray
        .slice(0, 10)
        .reduce((sum, number, index) => sum + number * index, 0);
    const rest = sum % 11;
    if (rest === 10) {
        return 0;
    }
    return rest;
}

function cpfValidator(cpf){
    const numbersOnlyCpf = cpf.replace(/\D/g, "").split('').map((item) => parseInt(item));
    let isValidCpf = checkIfEqual(numbersOnlyCpf)
    if (!isValidCpf) return 'CPF inválido';
    if (
        calcCpfFirstDigit(numbersOnlyCpf) === numbersOnlyCpf[9] &&
        calcCpfSecondDigit(numbersOnlyCpf) === numbersOnlyCpf[10]
    ) {
        return "CPF válido";
    }
    return 'CPF inválido'
}

console.log(cpfValidator("397.606.448-43"));

module.exports = cpfValidator;
