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
