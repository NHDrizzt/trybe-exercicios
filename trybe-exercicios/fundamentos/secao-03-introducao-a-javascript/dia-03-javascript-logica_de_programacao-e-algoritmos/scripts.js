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


// Bonus 1
for (let index = 0; index < 5; index++) {
    console.log("*****")
}

// Bonus 2
let ask = "*";
for (let index = 0; index < 5; index++) {
    console.log(ask)
    ask = ask.concat("*")
}

// Bonus 3
let asteriks
let tamanho = 4
let ye = ''

for (let index = 0; index < 5; index++) {
    for (let secondIndex = 0; secondIndex < 5; secondIndex++) {
        if(secondIndex < tamanho) {
            ye += ' '
        }
        else {
            ye += '*'
        }
    }
    console.log(ye);
    ye = ''
    tamanho -= 1
}

// Bonus 4
// let n = 5
// let mid = (n+1) / 2
// let leftSide = mid
// let rightSide = mid
// let a = ''
// for (let index = 0; index <= mid; index++) {
//     for (let secondIndex = 0; secondIndex <= n; secondIndex++) {
//         if(secondIndex > leftSide && secondIndex < rightSide) {
//             a += '*'

//         }
//         else {
//             a += ' '
//         }
//     }
//     console.log(a)
//     a = ''
//     leftSide -= 1
//     rightSide += 1 
// }

// Bonus 5
let n = 7
let mid = (n+1) / 2
let leftSide = mid
let rightSide = mid
let a = ''
for (let index = 1; index <= mid; index++) {
    for (let secondIndex = 1; secondIndex <= n; secondIndex++) {
        if(secondIndex == leftSide || secondIndex == rightSide || index == mid) {
            a += '*'

        }
        else {
            a += ' '
        }
    }
    console.log(a)
    a = ''
    leftSide -= 1
    rightSide += 1 
}

