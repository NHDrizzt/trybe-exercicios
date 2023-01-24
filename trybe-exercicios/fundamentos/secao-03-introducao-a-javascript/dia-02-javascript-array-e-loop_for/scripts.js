let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Ponto 1
for(let index of numbers){
    console.log(index)
}

// Ponto 2
let sum = 0;
for(let index of numbers){
    sum += index
}
console.log(sum)

// Ponto 3
let media = 0;
for(let index of numbers) {
    media += index
}
console.log("Media aritmetica: " + media/numbers.length)

// Ponto 4
if ((media/numbers.length) > 20) {
    console.log("valor maior que 20")
}
else {
    console.log("valor menor ou igual a 20")
}

// Ponto 5
let maiorValor = 0
for(let index of numbers) {
    if(index > maiorValor){
        maiorValor = index 
    } 
}
console.log(maiorValor)

// Ponto 6
let sumImpar = 0
for(let index of numbers) {
    if(index % 2 != 0) {
        sumImpar+=1
    }
}
if(sumImpar == 0) {
    console.log("Nenhum valor e impar")
}
else {
    console.log(sumImpar)
}

// Ponto 7
let menorValor = maiorValor 
for(let index of numbers) {
    if(index < menorValor) {
        menorValor = index
    }
}
console.log(menorValor)

// Ponto 8
for(let index = 1; index <= 25; index +=1) {
    console.log(index)
}

// Ponto 9
for(let index = 1; index <= 25; index +=1) {
    console.log(index/2)
}