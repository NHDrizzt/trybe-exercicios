const myObject = {
    i:1,
    v:5,
    x:10,
    l:50,
    c:100,
    d:500,
    m:1000
}

function romanoParaDecimal(number) {
    number = number.toLowerCase()
    let len = number.length
    let soma = myObject[number[len - 1]];

}

console.log(romanoParaDecimal('XI'));