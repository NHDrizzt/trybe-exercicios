const data = require('./data');

// 5 - Filtre e retorne um array com os nomes das bandas que contenham 'Rock' no gênero musical

const rockFilter = () => {
    return data.bands.filter(({genre}) => genre.includes('Rock')).map(({bandName}) => bandName)
}

module.exports = rockFilter;
