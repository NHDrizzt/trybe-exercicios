const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1921,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// Adicione o código do exercício aqui:

// requisito 01
const authorBornIn1947 = () => books.find((item) => item.author.birthYear === 1947)
//console.log(authorBornIn1947().author.name)

// requisito 02
const smallerName = () => {
    let menorValor = 1000;
    let nameBook;
    books.forEach((item) => {
        if (item.name.length < menorValor) {
            menorValor = item.name.length
            nameBook = item.name
        }
    })
   return  nameBook
}
//console.log(smallerName())

const getNamedBook = () => books.find((item) => item.name.length === 26)

//console.log(getNamedBook())

function everyoneWasBornOnSecXX() { return books.every((item) => item.author.birthYear > 1900 && item.author.birthYear <= 2000 )}

//console.log(everyoneWasBornOnSecXX())

const someBookWasReleaseOnThe80s = () => books.some((item) => item.releaseYear >= 1980 && item.releaseYear <= 1990);

//console.log(someBookWasReleaseOnThe80s())

const expectedResult = false;

const authorUnique = () => {
    let result = false;
    let authorBirthYear;
    books.forEach((item, index) => {
        authorBirthYear = item.author.birthYear;
        const booksFromIndex = books.slice(index + 1)
        booksFromIndex.forEach((element) => {
            if (authorBirthYear === element.author.birthYear) {
                result = true;
            }
        })
    })
    return result;
}

//console.log(authorUnique())