"use strict";

//Exercise: Level 1

//Challenge--1

const arr = Array();

//Challenge--2

let arr1 = Array();
arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

//Challenge--3

console.log(arr1.length);

//Challenge--4

console.log(arr1[0]);
const mid = arr1.length / 2;
console.log(Math.ceil(mid));
console.log(arr1[arr1.length - 1]);

//Challenge--5
let mixedDataTypes = Array(5);
mixedDataTypes = [0, "A", "B", true, undefined];

console.log(mixedDataTypes.length);
console.log(mixedDataTypes);

//Challenge--6

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "oracle",
  "Amazon",
];
//Challenge--7

console.log(itCompanies);

//Challenge--8

console.log(itCompanies[0]);

//Challenge--9

console.log(itCompanies[0]);
const midCom = (itCompanies.length - 1) / 2;
const miid = Math.ceil(midCom);
console.log(itCompanies[miid]);
console.log(itCompanies[itCompanies.length - 1]);

//Challenge--10

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
  console.log(" ");
}

//Challenge--11

for (let k = 0; k < itCompanies.length; k++) {
  console.log(itCompanies[k]);
}

//Challenge--12

const ss = itCompanies.join(" ");

//Challenge--13

itCompanies.includes("Meta") ? console.log("Yes") : console.log("NO");

//Challenge--14

const filtItc = [];
for (let o = 0; o < itCompanies.length; o++) {
  const companyS = itCompanies[o];
  let oCountS = 0;
  for (let g = 0; g < companyS.length; g++) {
    if (companyS[g].toLowerCase() === "o") {
      oCountS++;
      if (oCountS > 1) {
        break;
      }
    }
  }
  if (oCountS <= 1) {
    filtItc.push(companyS);
  }
}

console.log(filtItc);

//Challenge--15

const arrNum = [2, 3, 5, 6, 9, 1, 4];

console.log(arrNum.sort());

//Challenge--16

console.log(arrNum.reverse());

//Challenge--17

console.log(itCompanies.slice(4, itCompanies.length));

//Challenge--18

const midItcom = Math.floor(itCompanies.length - 1) / 2;

console.log(itCompanies.slice(midItcom, 4));

//Challenge--19

console.log(itCompanies.splice(1, itCompanies.length));

//Challenge--20

console.log(midItcom);
itCompanies.splice(midItcom, 5);

console.log(itCompanies.splice());

//Exercise: Level 2

//Challenge--1

import countries from "/countries.js";
import web_techs from "/web_techs.js";
console.log(countries);
console.log(web_techs);

//Challenge--2

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

const remove = text.replace(/[^\w\s]/g, "");
const words = remove.split(" ");
// console.log(remove);
console.log(words);
console.log(words.length);

//Challenge--3

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}
const allgHoney = true;
if (allgHoney && shoppingCart.includes("Honey")) {
  const indexHoney = shoppingCart.indexOf("Honey");
  shoppingCart.splice(indexHoney, 1);
}
const teaIndex = shoppingCart.indexOf("Tea");
if (teaIndex === -1) {
  shoppingCart[teaIndex] = "Green Tea";
}
console.log(shoppingCart);

//Challenge--4

if (countries.includes("Ethiopia")) {
  console.log(countries);
} else {
  countries.push("Ethiopia");
  console.log(countries);
}

//Challenge--5

if (web_techs.includes("Sass")) {
  console.log(web_techs);
} else {
  web_techs.push("Sass");
  console.log(web_techs);
}

//Challenge--6

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullstack = frontEnd.concat(backEnd);
console.log(fullstack);

//Challenge--6

//Exercise: Level 3

//Challenge--1

//Section--1

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortAges = ages.sort();
console.log(sortAges);
const findMin = Math.min(...ages);
console.log(findMin);
const findMax = Math.max(...ages);
console.log(findMax);

//Section--2

const findMid = Math.floor(sortAges.length / 2);
const showMid = sortAges[findMid - 1];
console.log(`MidAge = ${showMid}`);
