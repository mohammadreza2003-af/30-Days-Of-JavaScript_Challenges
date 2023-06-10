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
