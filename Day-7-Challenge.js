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
