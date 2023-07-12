"use strict";

//Exercise: Level 1

// Challenge--1 & Challenge--2

const fullName = function () {
  const name = "Ali";
  const lastName = "Ebrahimi";
  const fullName = `${name} ${lastName}`;
  return fullName;
};

console.log(fullName());

//Challenge--3

const addNumbers = (num1, num2) => {
  return num1 + num2;
};

console.log(addNumbers(2, 3));

//Challenge--4

const areaReg = function (length, width) {
  const area = length * width;
  return area;
};
console.log(areaReg(2, 2));

//Challenge--5

function perimeterOfRectangle(length, width) {
  const perimeter = 2 * (length + width);
  return perimeter;
}
console.log(perimeterOfRectangle(2, 3));

//Challenge--6

const volumeOfRectPrism = (length, width, height) => {
  const volume = length * width * height;
  return volume;
};
console.log(volumeOfRectPrism(2, 2, 2));

//Challenge--7

const areaOfCircle = function (radiu) {
  return 3.14 * radiu * radiu;
};
console.log(areaOfCircle(3));

//Challenge--8

const circumOfCircle = function (radiu) {
  const circumference = 2 * 3.14 * radiu;
  return circumference;
};

console.log(circumOfCircle(2));

//Challenge--9

const substance = function (mass, volume) {
  const density = mass / volume;
  return density;
};

console.log(substance(10, 2));

//Challenge--10

const volcity = function (distance, time) {
  return distance / time;
};
console.log(volcity(100, 2));

//Challenge--11

const convertCelsiusToFahrenheit = function (celsius) {
  const formula = `${celsius * (9 / 5) + 32}`;
  return formula;
};
console.log(convertCelsiusToFahrenheit(100));

//Challenge--12

const clacBmiF = function (weight, height) {
  const clacBmi = weight / height ** 2;
  if (clacBmi <= 18.5) {
    console.log("Underweight : " + clacBmi);
  } else if (clacBmi >= 18.5 && clacBmi <= 24.9) {
    console.log("Normal weight : " + clacBmi);
  } else if (clacBmi >= 25 && clacBmi <= 29.9) {
    console.log("Overweight : " + clacBmi);
  } else {
    console.log("Obese : " + clacBmi);
  }
};

clacBmiF(50, 1.7);

//Challenge--13

const checkSeason = function (month) {
  if (month <= 3 && month >= 1) {
    console.log("Spring");
  } else if (month <= 6 && month > 3) {
    console.log("Summer");
  }
  if (month <= 9 && month > 6) {
    console.log("Autumn");
  }
  if (month <= 12 && month > 9) {
    console.log("Winter");
  }
};

checkSeason(9);

//Challenge--14

const findMax = (...args) => {
  let arrFindMax = 0;
  for (let i = 0; i < args.length; i++) {
    // arrFindMax.push(Math.max(args[i]));
    arrFindMax = Math.max(args[i]);
  }
  return arrFindMax;
};

console.log(findMax(10, 15, 20));

//Exercises: Level 2

//Challenge--1

const solveLinEquation = function (a, b, c) {
  if (a === 0 && b === 0) {
    return "Invalid equation";
  } else if (a === 0) {
    const y = -c / b;
    return "Y : " + y;
  } else if (b === 0) {
    const x = -c / a;
    return "X : " + x;
  } else {
    const x = -c / a;
    const y = (-a / b) * x;
    return "x = " + x + ", y = " + y;
  }
};
console.log(solveLinEquation(0, 1, 2));

//Challenge--2

function solveQuadEquation(a, b, c) {
  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [x1, x2];
  } else if (discriminant === 0) {
    const x = -b / (2 * a);
    return [x];
  } else {
    return [];
  }
}
const result1 = solveQuadEquation(1, -3, 2);
console.log(result1);
