const [data, books] = require('./data/data')

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

const flatten = () => {
    return arrays.flat()
}

//console.log(flatten())

//const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

const reduceNames = () => {
    return books.reduce((acc, currentValue) => acc + (currentValue.author.name + ', '), '')
}

//console.log(reduceNames())


//const expectedResult = 43;

const averageAge = () => {
    return books.reduce((acc, currentValue) => {
        const resultYear = currentValue.releaseYear - currentValue.author.birthYear
        return acc + resultYear
    }, 0) / books.length
}

//console.log(averageAge())

const expectedResult = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
    },
    releaseYear: 1991,
};

const longestNamedBook = () => {
    return books.filter((item) => item.name.length === books.map((element) => element.name.length).sort((a, b) => b - a )[0])
}

console.log(longestNamedBook())