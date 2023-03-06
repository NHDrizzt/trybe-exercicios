const data = require('./data');

// 4 - Filtre e retorne um array apenas com o nome das bandas que são dos Estados Unidos

const usaFilter = () => {
    const country  = data.bands.filter(({country}) => country === 'United States')
    return country.map(({bandName}) => bandName)
}

console.log(usaFilter())

module.exports = usaFilter;
