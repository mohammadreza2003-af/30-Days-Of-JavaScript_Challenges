"use strict";

const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//Challenge--1

console.log(numbers.map((cur, i) => `${i + 1} => ${cur}`));
console.log(numbers.filter((cur) => cur >= 5));
console.log(numbers.reduce((acc, cur) => acc + cur, 0));

//Challenge--2

function callBack(acc, cur) {
  return acc + cur;
}

console.log(numbers.reduce(callBack));

//Challenge--3

countries.forEach((cur, i, arr) => console.log(cur));

//Challenge--4

names.forEach((cur, i, arr) => console.log(cur));

//Challenge--5

numbers.forEach((cur, i, arr) => console.log(cur));

//Challenge--6

countries
  .map(function (cur, index, arr) {
    return cur;
  })
  .forEach((cur) => console.log(cur));

//Challenge--7

console.log(countries.map((cur) => cur.length));

//Challenge--8

numbers
  .map(function (cur, index, arr) {
    return cur;
  })
  .forEach((cur) => console.log(Math.sqrt(cur)));

//Challenge--9

countries
  .map(function (cur, index, arr) {
    return cur;
  })
  .forEach((cur) => console.log(cur.toUpperCase()));

//Challenge--10

console.log(products.map((cur) => cur.price));

//Challenge--11

console.log(countries.filter((cur) => cur.toLowerCase().includes("land")));

//Challenge--12

console.log(countries.filter((cur) => cur.length >= 6));

//Challenge--13

console.log(countries.filter((cur) => cur.toUpperCase().startsWith("E")));

//Challenge--14

console.log(products.map((cur) => Number(cur.price)).filter((cur) => cur > 0));

//Challenge--15

const getStringLists = function (arr) {
  return arr.filter((cur) => cur.length);
};
console.log(getStringLists([1, 3, "ali", "ssdf"]));

//Challenge--16

console.log(numbers.reduce((acc, cur) => acc + cur, 0));

//Challenge--17

const join = countries
  .map((cur) => cur)
  .reduce((acc, cur, i) => {
    return acc.concat(cur);
  }, [])
  .join(", ");

console.log(
  `${join}, and ${
    countries[countries.indexOf("IceLand")]
  } are north European countries`
);

//Challenge--18

console.log(names.some((cur) => cur.length > 7));

//Challenge--19

console.log(countries.every((cur) => cur.includes("land")));

//Challenge--20

console.log(countries.find((cur) => cur.length >= 6));

//Challenge--21

console.log(countries.findIndex((cur) => cur.length >= 6));

//Challenge--22

console.log(countries.findIndex((cur) => cur.includes("Norway")));

//Challenge--23

console.log(countries.findIndex((cur) => cur.includes("Russia")));
