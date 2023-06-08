"use strict";

//Exercises: Level 1

//Challenge--1

const enterUserInput = Number(prompt("Please Enter Your Age"));

if (enterUserInput >= 18) {
  console.log("You are old enough to drive");
} else {
  const elseEnter = 18 - enterUserInput;
  console.log(`You are left with ${elseEnter} years to drive.`);
}

//challenge--2

const inputUser1 = Number(prompt("Enter Your Age 1"));
const inputUser2 = Number(prompt("Enter Your Age 2"));

inputUser1 > inputUser2
  ? console.log(
      `User 1 (${inputUser1})Years is Biger User 2 (${inputUser2})Years`
    )
  : console.log(
      `User 2 (${inputUser2})Years is Biger User 1 (${inputUser1})Years`
    );

//challenge--3

const num1 = Number(prompt("Please Enter Number"));

if (num1 % 2 === 0) {
  console.log(`${num1} Number is Even`);
} else {
  console.log(`${num1} Number is Not Even`);
}

//Exercises: Level 2

//challenge--1

const enterGrades = Number(prompt("Please Enter Your Score"));

switch (enterGrades <= 100 && enterGrades >= 0) {
  case enterGrades >= 80 && enterGrades <= 100:
    console.log("Grade : A");
    break;
  case enterGrades >= 60 && enterGrades <= 79:
    console.log("Grade : B");
    break;
  case enterGrades >= 55 && enterGrades <= 59:
    console.log("Grade : C");
    break;
  default:
    console.log("You Failed");
}
