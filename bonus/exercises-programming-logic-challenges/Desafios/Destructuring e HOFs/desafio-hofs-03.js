const data = require('./data');

// 3 - Retorne um array utilizando HOF's que contenha apenas o nome das bandas

const getBandsName = () => data.bands.reduce((acc, {bandName}) => {
        acc.push(bandName)
        return acc
    }, [])


console.log(getBandsName())

module.exports = getBandsName;
