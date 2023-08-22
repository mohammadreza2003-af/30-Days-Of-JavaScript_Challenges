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