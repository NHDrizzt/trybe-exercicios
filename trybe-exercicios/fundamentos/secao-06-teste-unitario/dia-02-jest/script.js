function myRemove(arr, item) {
  let newArr = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }

  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== "number") return false;

  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";

  if (num % 3 === 0) return "fizz";

  if (num % 5 === 0) return "buzz";

  return num;
}

const mapString = (objectMap, string) => {
  const splitString = string.split("");

  const mappedArray = [];

  for (let index = 0; index < splitString.length; index += 1) {
    const character = splitString[index];

    const mappedValue = objectMap[character];

    if (mappedValue) {
      mappedArray.push(mappedValue);
    } else {
      mappedArray.push(character);
    }
  }

  return mappedArray.join("");
};

const encode = (string) => {
  const map = {
    a: 1,

    e: 2,

    i: 3,

    o: 4,

    u: 5,
  };

  return mapString(map, string);
};

const decode = (string) => {
  const map = {
    1: "a",

    2: "e",

    3: "i",

    4: "o",

    5: "u",
  };

  return mapString(map, string);
};

const techList = (arrTech, person) => {
  if (arrTech.length === 0) return "Vazio!";
  const resultArray = [];
  arrTech.sort();
  for (let i = 0; i < arrTech.length; i++) {
    const newObject = {
      name: person,
      tech: arrTech[i],
    };
    resultArray.push(newObject);
  }
  return resultArray;
};

const hydrate = (str) => {
  const numbers = str.match(/\d+/g);
  const result = numbers.reduce((acc, cur) => acc + parseInt(cur, 10), 0);
  if (result <= 1) {
    return `${result} copo de água`;
  } else {
    return `${result} copos de água`;
  }
};

module.exports = { myRemove, myFizzBuzz, encode, decode, techList, hydrate };
