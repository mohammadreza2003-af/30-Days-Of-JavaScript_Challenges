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
