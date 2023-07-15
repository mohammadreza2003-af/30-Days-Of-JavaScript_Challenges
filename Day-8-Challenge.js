"use strict";

//Exercises: Level 1

//Challenge--1

const dog = {};

//Challenge--2

console.log(dog);

//Challenge--3

dog.name = "Alex";
dog.color = "Black";
dog.brak = "normal";

//Challenge--4

const value = Object.values(dog);
console.log(value);

//Challenge--5

dog.getDogInfo = function () {
  const breed = "Fox";
  return `Name : ${this.name} color : ${this.color} brak : ${this.brak}`;
};

console.log(dog.getDogInfo());
