const data = require('./data/data')



//const expectedResult = 120797034;
const getPopulation = () => data
    .reduce((acc, cur) => {
        return acc + cur.population
    }, 0)

// console.log(getPopulation())


//const expectedResult = 4311757;
const getTotalArea = () => data
    .reduce((acc, cur) => {
        return acc + cur.area
    }, 0)

//console.log(getTotalArea())

// const expectedResult = {
//     name: 'American Samoa',
//     region: 'Oceania',
//     currencies: [{ code: 'USD', name: 'United States Dollar' }],
//     capital: 'Pago Pago',
//     population: 55197,
//     area: 199
// }
const longestName = () => data
    .reduce((acc, cur) => {
        if(cur.name.length > acc.name.length) {
            acc = cur
        }
        return acc
    }, { name: ''})

// console.log(longestName())

// const names = [
//     'Aanemarie', 'Adervandes', 'Akifusa',
//     'Abegildo', 'Adicellia', 'Aladonata',
//     'Abeladerco', 'Adieidy', 'Alarucha',
// ];
//const expectedResult = 20;
const countA = () => {
    const map = data.map((item) => item.name)
    return map.reduce((acc, cur) => {
        const countAs = cur.toLowerCase().split('a').length - 1
        return acc + countAs
    }, 0)
}

//console.log(countA())

// O index 0 do array `students` equivale ao index 0 do array `grades`
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
// const expectedResult = [
//     { name: 'Pedro Henrique', average: 7.8 },
//     { name: 'Miguel', average: 9.2 },
//     { name: 'Maria Clara', average: 8.8 },
// ];
const studentAverage = () => {
    return grades.map((gradesArr, index) => {
        const sum = gradesArr.reduce((acc, cur) => acc + cur, 0);
        const avg = sum / gradesArr.length;
        return {
            name: students[index],
            average: avg,
        };
    });
}

// console.log(studentAverage())