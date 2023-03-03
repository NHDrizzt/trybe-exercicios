const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => Math.floor(Math.random() * (dragon.strength - 15 + 1)) + 15
// console.log(dragonDamage())

const warriorDamage = () => Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength + 1)) + warrior.strength
// console.log(warriorDamage())

const mageDamageAndManaSpent = () => {
    const damage = Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1)) + mage.intelligence;
    
    if (mage.mana < 15) {
        return { damage, manaSpent: 'Nao possui mana suficiente' };
    }
    return { damage, manaSpent: 15 };
}

const gameActions = {
    warriorTurn: (warriorDamage) => {
        const warriorDmg = warriorDamage(warrior);
        dragon.healthPoints -= warriorDmg;
        warrior.damage = warriorDmg;
    },
    mageTurn: (mageDamage) => {
        const mageDmg = mageDamage(mage);
        dragon.healthPoints -= mageDmg.damage;
        mage.mana -= 15;
        mage.damage = mageDmg
    },
    dragonTurn: (dragonDamage) => {
        const dragonDmg = dragonDamage(dragon);
        warrior.healthPoints -= dragonDmg;
        mage.healthPoints -= dragonDmg;
        dragon.damage = dragonDmg;
    },
    turnResults: () => battleMembers
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamageAndManaSpent)
gameActions.dragonTurn(dragonDamage)
console.log(gameActions.turnResults())