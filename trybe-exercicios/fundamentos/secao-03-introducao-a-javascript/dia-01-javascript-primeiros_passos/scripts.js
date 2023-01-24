// First exercise
const firstNumber = 1;
const secondNumber = 2;
if (firstNumber >= secondNumber) {
  console.log("FirstNumber is greater then SecondNumber");
} else {
  console.log("SecondNumber is greater then FirstNumber");
}

// Second exercise
const one = 5;
const two = 15;
const three = -5;

if (one >= two && one >= three) {
  console.log(one + " is  the higher number");
} else if (two >= one && two >= three) {
  console.log(two + " is the higher number");
} else {
  console.log(three + " is the higher number");
}

// Third
let parameter = true;

if (parameter == true) {
  console.log("positive");
} else {
  console.log("negative");
}

// Fourth
const firstAng = 179;
const secondAng = 0;
const thirdAng = 1;

if (
  firstAng &&
  secondAng &&
  thirdAng != 0 &&
  firstAng &&
  secondAng &&
  thirdAng >= 1
) {
  if (firstAng + secondAng + thirdAng === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("Invalid numbers!");
}

// Fifth
let piece = "qUEEN";

switch (piece.toLowerCase()) {
  case "king":
    console.log("Move every direction");
    break;
  case "queen":
    console.log("Move horizontally, vertically and diagonals");
    break;
  case "rook":
    console.log("Move horizontally");
    break;
  case "knight":
    console.log("Move on L");
    break;
  case "bishop":
    console.log("Move on diagonals");
    break;
  case "pawn":
    console.log("Move vertically and diagonally");
    break;
}

// Sixth
const grade = 85;

grade >= 90
  ? console.log("A")
  : grade >= 80
  ? console.log("B")
  : grade >= 70
  ? console.log("C")
  : grade >= 60
  ? console.log("D")
  : grade >= 50
  ? console.log("E")
  : grade < 50
  ? console.log("F")
  : console.log("Error");

//Seventh
const numberOne = 2;
const numberTwo = 3;
const numberThree = 2;

numberOne % 2 == 0 || numberTwo % 2 == 0 || numberThree % 2 == 0
  ? console.log(true)
  : console.log(false);
numberOne % 2 != 0 || numberTwo % 2 != 0 || numberThree % 2 != 0
  ? console.log(true)
  : console.log(false);

const productCost = 500;
const productPrice = 700;

// Eighth
let totalCost;
let totalProfit;

productCost != 0 || productPrice != 0
  ? ((totalCost = productCost * 1000 * 1.2),
    (totalProfit = productPrice * 1000 - totalCost),
    console.log(totalProfit))
  : console.log("Error");

//Ninth

let salary = 3000;

salary <= 1556.94
  ? (salary -= salary * 0.1)
  : salary > 1556.95 && salary <= 2594.92
  ? (salary -= salary * 0.09)
  : salary > 2594.92 && salary <= 5189.82
  ? (salary -= salary * 0.11)
  : salary > 5189.82
  ? (salary -= 570.88)
  : console.log("Invalid Number");

salary > 1903.99 && salary <= 2826.55
  ? (salary -= salary * 0.075 - 142.8)
  : salary > 2826.66 && salary <= 3751.05
  ? (salary -= salary * 0.15 - 354.8)
  : salary > 3751.06 && salary <= 4664.68
  ? (salary -= salary * 0.225 - 636.13)
  : salary > 4664.68
  ? (salary -= salary * 0.275 - 869.36)
  : console.log("NO IMPOUSTOUS");

console.log(salary);
