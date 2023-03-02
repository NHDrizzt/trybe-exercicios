const newEmployees = () => {
    
    const employees = {
        
        id1: geraNomeComEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        
        id2: geraNomeComEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        
        id3: geraNomeComEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
        
    }
    
    return employees;
    
};

const geraNomeComEmail = (nome) => {
    return {
        name: nome,
        email: `${nome}@trybe.com`
    }
}

console.log(newEmployees().id1)
console.log(newEmployees().id2)
console.log(newEmployees().id3)