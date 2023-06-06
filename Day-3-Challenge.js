"use strict";

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
