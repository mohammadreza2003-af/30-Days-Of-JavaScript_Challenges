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

//Challenge--3

const printArray = (...args) => {
  for (const print of args) {
    console.log(print);
  }
};
printArray("ali", "Reza");

//Challenge--4

const showDateTime = function () {
  const date = new Date();
  console.log(date);
  // console.log(date.getDate());
  // console.log(date.getFullYear());
  // console.log(date.getMonth());
  // console.log(date.getDay());
};
showDateTime();

//Challenge--5

const swapValues = function (x, y) {
  const arrXY = [x, y];
  const newArrXY = [];
  for (let i = arrXY.length - 1; i >= 0; i--) {
    newArrXY.push(arrXY[i]);
  }
  return newArrXY;
};
console.log(swapValues(2, 3));

//Challenge--6

const reverseArray = (...args) => {
  return args.reverse();
};
console.log(reverseArray(1, 2, 3, 4));

//Challenge--7

const capitalizeArray = function (text) {
  return text.toUpperCase();
};
console.log(capitalizeArray("ali"));

//Challenge--8

// alert("Sum Two Number");
// const enterN1 = Number(prompt("Please Enter Number 1"));
// const enterN2 = Number(prompt("Please Enter Number 2"));
const addItem = function (num1, num2) {
  return num1 + num2;
};
console.log(addItem(10, 10));

//Challenge--9

const arr = ["Ali", "Reza", "Mohmammad", "Rahman", "Mahdi"];
const removeItem = function (index, arr) {
  const arr1 = arr.slice(0, index);
  const arr2 = arr.slice(index + 1, arr.length);

  return arr1.concat(arr2);
};
console.log(removeItem(2, arr));

//Challenge--10

const sumOfNumbers = (...args) => {
  let sum = 0;
  for (const sumAll of args) {
    sum += sumAll;
  }
  return sum;
};

console.log(sumOfNumbers(1, 2, 3));

//Challenge--11

const sumOfOdds = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    if (args[i] % 2 !== 0) {
      sum += args[i];
    }
  }
  return sum;
};

console.log(sumOfOdds(1, 2, 3, 4));

//Challenge--12

const sumOfEven = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    if (args[i] % 2 === 0) {
      sum += args[i];
    }
  }
  return sum;
};

console.log(sumOfEven(1, 2, 3, 4, 6));

//Challenge--13

function evensAndOdds(num) {
  let even = [];
  let odd = [];
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) {
      even.push(i);
    }
    if (i % 2 != 0) {
      odd.push(i);
    }
  }
  console.log(
    "the even number is " + even.length + " \nthe odd number is " + odd.length
  );
}
evensAndOdds(101);

//Challenge--14

const sumarg = (...args) => {
  let empSum = 0;
  for (let i = 0; i < args.length; i++) {
    empSum += args[i];
  }
  return empSum;
};
console.log(sumarg(1, 2, 3));

//Challenge--15

const randomUserIp = function () {
  let ip = "";
  for (let i = 0; i < 4; i++) {
    let segment = Math.trunc(Math.random() * 256) + 1;
    ip += segment + ".";
  }
  ip = ip.slice(0, -1);
  return ip;
};
console.log(randomUserIp());

//Challenge--16

const randomMacAddress = function () {
  let macAd = "";
  for (let i = 0; i < 6; i++) {
    let random = Math.trunc(Math.random() * 256).toString(16);
    macAd += random.padStart(2, "0") + ":";
  }
  macAd = macAd.slice(0, -1);
  return macAd;
};
console.log(randomMacAddress());

//OR--||

function generateRandomMacAddress() {
  let macAddress = "";
  let hexDigits = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    let randomHex = "";
    for (let j = 0; j < 2; j++) {
      randomHex += hexDigits.charAt(
        Math.floor(Math.random() * hexDigits.length)
      );
    }

    macAddress += randomHex + ":";
  }
  macAddress = macAddress.slice(0, -1);

  return macAddress;
}

let randomMac = generateRandomMacAddress();
console.log(randomMac);
