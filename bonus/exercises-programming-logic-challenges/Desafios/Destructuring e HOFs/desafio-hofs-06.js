const data = require('./data');

// 6 - Filtre e retorne um array com todos os álbuns que possuem nota igual a 100

const highestRatingFilter = () => {
    return data.bands.map((item) => item.bestAlbuns)
        .flat()
        .filter((item) => item.rate === 100)
}

console.log(highestRatingFilter())

module.exports = highestRatingFilter;
