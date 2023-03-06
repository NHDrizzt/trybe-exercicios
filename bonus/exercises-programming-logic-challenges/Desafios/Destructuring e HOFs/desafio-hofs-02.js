const data = require('./data');

/* 2 - Através do destructuring, acesse o nome e os melhores álbuns primeira banda, 
retornando uma string no seguinte formato: "os melhores álbuns do Radiohead: In Rainbows,Kid A,OK Computer,Pablo Honey"
*/

const getBestAlbuns = () => {
    const [banda1] = data.bands
    const {bandName, bestAlbuns} = banda1
    const allBestAlbunsNames = bestAlbuns.reduce((acc, { name }) => {
        acc.push(name)
        return acc
    }, [])
    return `Os melhores álbuns do ${bandName}: ${allBestAlbunsNames}`
}

console.log(getBestAlbuns())

module.exports = getBestAlbuns;
