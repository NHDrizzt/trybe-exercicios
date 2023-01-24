// Ponto bonus 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let index = 1; index < numbers.length; index+=1){
    for(let secondIndex = 0; secondIndex < index; secondIndex+=1) {
        if(numbers[index] < numbers[secondIndex]) {
            let aux = numbers[index]
            numbers[index] = numbers[secondIndex]
            numbers[secondIndex] = aux
        }
    }
}
console.log(numbers)

// Ponto bonus 2
let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let index = 1; index < array.length; index+=1){
    for(let secondIndex = 0; secondIndex < index; secondIndex+=1) {
        if(array[index] > array[secondIndex]) {
            let aux = array[index]
            array[index] = array[secondIndex]
            array[secondIndex] = aux
        }
    }
}
console.log(array)


// Ponto bonus 3
let newArray = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultArray = []
for(let index = 0; index < newArray.length; index+=1){
    if(newArray[index+1] === undefined) {
        resultArray.push(newArray[index] * 2)
    }
    else {
        resultArray.push(newArray[index] * newArray[index+1])
    }

}
console.log(resultArray)