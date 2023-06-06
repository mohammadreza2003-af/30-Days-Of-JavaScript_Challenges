"use strict";

//Exercises: Level 1

// Challenge--1
const information = {
  ali: [["reza", "ali"], "reza"],
  firstName: "Mohammad Reza",
  lastName: "Ebrahimi",
  age: 20,
  country: "Afghanistan",
  city: "Herat",
};

console.log(typeof information.firstName);

// Challenge--2

console.log(10 === "10");

// Challenge--3

console.log(parseInt("9.8") === 10);

//Challenge--4

// True Value

console.log(6 > 5);
console.log(6 > 5 && undefined !== 10);
console.log(typeof Nan === typeof number);

// False Value

console.log(10 > 11);
console.log(!(6 > 5) && undefined !== 10);
console.log("Alireza".length === "Mohammadreza".length);

//Challenge--5

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");

//Challenge--6

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);

//Challenge--7

const nowYear = new Date().getFullYear();
const nowMonth = new Date().getMonth() + 1;
const nowDate = new Date().getDate();
const nowDay = new Date().getDay() + 1;
console.log(nowYear, nowMonth, nowDate, nowDay);

//Exercises: Level 2

//Challenge--1

const height = prompt("Enter Number Height");
const base = prompt("Enter Number Base");

const area = 0.5 * height * base;

console.log("Area : " + area);

//Challenge--2

const Num1 = prompt("Enter Number 1");
const Num2 = prompt("Enter Number 2");
const Num3 = prompt("Enter Number 3");

const Sum = Number(Num1) + Number(Num2) + Number(Num3);

console.log("Sum : " + Sum);

//Challenge--3

const length = prompt("Enter Number Length");
const width = prompt("Enter Number Width");

const areaReg = 2 * (Number(length) + Number(width));

console.log("Area Reg : " + areaReg);

//Challenge--4

const radius = prompt("Enter Number Radius");
const PI = 3.14;

const areaCircle = PI * Number(radius) ** 2;

console.log("Area Circle : " + areaCircle);
