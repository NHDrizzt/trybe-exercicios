// Ponto 1
let result = 1;
for (let index = 1; index < 10; index++) {
    result *= index 
}
console.log(result)

// Ponto 2

let word = 'tryber'
let newWord = []
for (let index = 0; index < word.length; index++) {
    newWord.unshift(word.charAt(index))
}
console.log(newWord.join(""))

// Ponto 3
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maxValue = 0;
let ans;
let ans2;
let minValue = 100
for (let index = 0; index < array.length; index++) {
    console.log(array[index].length)
    if(array[index].length > maxValue) {
        maxValue = array[index].length
        ans = array[index]
    }
    else if(array[index].length < minValue) {
        minValue = array[index].length
        ans2 = array[index]
    }
    
}
console.log(ans)
console.log(ans2)

// Ponto 4 find prime number
let biggestPrimeNumber = [];

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    console.log(currentNumber)
    console.log(currentDivisor)
    if (currentNumber % currentDivisor == 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);

// if(randomNumber == 2 && randomNumber == 1){
//     console.log(true)
// }
// else {
//     p=(2**randomNumber-1)%randomNumber
//     if(p == 1){
//         console.log(true)
//     }
//     else {
//         console.log(false)
//     }
// }