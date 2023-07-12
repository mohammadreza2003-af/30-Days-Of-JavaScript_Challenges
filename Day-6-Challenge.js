"use strict";

//Exercise: Level 1

// Challenge--1
/*
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
let j = 0;
while (j <= 10) {
  console.log(j);
  j++;
}
let k = 0;
do {
  console.log(k);
  k++;
} while (k <= 10);

//Challenge--2

for (let i = 10; i >= 0; i--) {
  console.log(i);
}
let s = 10;
while (s >= 0) {
  console.log(s);
  s--;
}
let e = 10;
do {
  console.log(e);
  e--;
} while (e >= 0);

// Challenge--3

for (let i = 0; i <= 10; ) {
  console.log(i);
}
*/
//Challenge--4
let s = "";
for (let w = 1; w <= 7; w++) {
  s += "#";
  console.log(s);
}

//Challenge--5

for (let a = 0; a <= 10; a++) {
  console.log(`${a} * ${a} = ${a * a} `);
}

//Challenge--6

for (let u = 0; u <= 10; u++) {
  console.log(`${u}^2  = ${u ** 2}`);
}

//Challenge--7
for (let q = 0; q <= 10; q++) {
  console.log(`${q}^3  = ${q ** 3}`);
}

//Challenge--8

for (let r = 0; r <= 100; r++) {
  if (r % 2 === 0) {
    console.log(r);
  }
}

//Challenge--9

for (let x = 0; x <= 100; x++) {
  if (x % 2 === 1) {
    console.log(x);
  }
}

//Challenge--10

let sumAll = 0;
for (let d = 0; d <= 100; d++) {
  sumAll += d;
}
console.log(sumAll);

//Challenge--11

let sumAllEven = 0;
let sumAllOdd = 0;
for (let r = 0; r <= 100; r++) {
  if (r % 2 === 0) {
    sumAllEven += r;
  } else {
    sumAllOdd += r;
  }
}
console.log(sumAllEven);
console.log(sumAllOdd);

//Challenge--12

const arrEvenOdd = [sumAllEven, sumAllOdd];
console.log(arrEvenOdd);

//Challenge--13

const arrRandom = [];
console.log(arrRandom);

for (let h = 1; h <= 5; h++) {
  arrRandom.push(Math.trunc(Math.random() * 100) + 1);
}
console.log(arrRandom);

//Challenge--14

const randomNumbers = () => {
  const numbers = [];
  while (numbers.length < 5) {
    const number = Math.floor(Math.random() * 100);
    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }
  return numbers;
};

console.log(randomNumbers());

//Challenge--15

const arrRandomId = [1, 3, 5, 7, 9, 6, "a", "c", "c", "k", "m"];
let arrE = "";
for (let f = 0; f <= 5; f++) {
  arrE += arrRandomId[Math.trunc(Math.random() * arrRandomId.length - 1)];
  // arrE.push(arrRandomId[Math.trunc(Math.random() * arrRandomId.length - 1)]);
}
console.log(arrE);

//Exercises: Level 2

//Challenge--1

const generateRandomId = function () {
  let result = "";
  const arrCh = ["a", "b", "c", "d", "e", "x", "y", "z"];
  for (let i = 0; i <= 10; i++) {
    result += Math.trunc(Math.random() * 10) + 1;
    result += arrCh[Math.trunc(Math.random() * arrCh.length - 1)];
  }
  return result;
};
console.log(generateRandomId());

//Challenge--2

function generateRandomHexadecimalNumber() {
  const randomHex = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomHex;
}
console.log(generateRandomHexadecimalNumber());

//Challenge--3

const resultN = [];

for (let i = 1; i <= 3; i++) {
  resultN.push(Math.trunc(Math.random() * 240) + 1);
}
console.log(`rgb(${resultN})`);

//Challenge--4

const arrCou = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

//Challenge--5

const arrEm = [];
for (let i = 0; i <= arrCou.length - 1; i++) {
  arrEm.push(arrCou[i].length);
}
console.log(arrEm);

//Challenge--6

//Challenge--7

let landS = [];
let withoutLandS = [];
for (let i = 0; i < arrCou.length; i++) {
  if (arrCou[i].includes("LAND")) {
    landS.push(arrCou[i]);
  } else {
    withoutLandS.push(arrCou[i]);
  }
}
console.log(landS);
console.log(withoutLandS);

//Challenge--8

let conAi = [];
for (let i = 0; i < arrCou.length; i++) {
  if (arrCou[i].endsWith("IA")) {
    conAi.push(arrCou[i]);
  }
}
console.log(conAi);

//Challenge--9

let arrB = "";
for (let k = 0; k < arrCou.length; k++) {
  if (arrCou[k].length >= arrB.length) {
    arrB = arrCou[k];
  }
}
console.log(arrB);

//Challenge--10

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
let arrL = "";
for (let i = 0; i < webTechs.length; i++) {
  if (webTechs[i].length >= arrL.length) {
    arrL = webTechs[i];
  }
}
console.log(arrL);

//Challenge--11

let lef = [];
for (let i = 0; i < arrCou.length; i++) {
  if (arrCou[i].length === 5) {
    lef.push(arrCou[i]);
  }
}
console.log(lef);

//Challenge--12

const arrS = [];
for (let i = 0; i < webTechs.length; i++) {
  const tech = webTechs[i];
  const inAr = [tech, tech.length];
  arrS.push(inAr);
}
console.log(arrS);

//Challenge--13

const mernStack = ["MongoDB", "Express", "React", "Node"];

let arrFN = "";
for (let i = 0; i < mernStack.length; i++) {
  arrFN += mernStack[i][0];
}
console.log(arrFN);

//Challenge--14

const array = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];

for (let item of array) {
  console.log(item);
}

//Challenge--15

const fruits = ["banana", "orange", "mango", "lemon"];

for (let i = 0; i < fruits.length / 2; i++) {
  const temp = fruits[i];
  fruits[i] = fruits[fruits.length - 1 - i];
  fruits[fruits.length - 1 - i] = temp;
}

console.log(fruits);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
//Challenge--16
for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j]);
  }
}

//Exercises: Level 3

//Challenge--1

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

//Challenge--2

let sortedCountries = [];
for (let i = 0; i < countries.length; i++) {
  sortedCountries.push(countries[i]);
}
console.log(sortedCountries.sort());

//Challenge--3

let sortedWebTech = [];
for (let i = 0; i < webTechs.length; i++) {
  sortedWebTech.push(webTechs[i]);
}
console.log(sortedWebTech.sort());

//Challenge--4

const arrCLand = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) {
    arrCLand.push(countries[i]);
  }
}
console.log(arrCLand);

//Challenge--5

let hightest = "";
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length >= hightest.length) hightest = countries[i];
}
console.log(hightest);

//Challenge--6

const fiveC = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 5) {
    fiveC.unshift(countries[i]);
  }
}
console.log(fiveC);
