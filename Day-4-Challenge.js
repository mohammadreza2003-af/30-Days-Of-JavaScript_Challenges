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

switch (true) {
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

//challenge--2

const enterSeason = prompt("Please Enter Season");

switch (enterSeason) {
  case "September":
  case "October":
  case "November":
    console.log("The Season is Autumn.");
    break;
  case "December":
  case "January ":
  case "February":
    console.log("The Season is Winter.");
    break;
  case "March":
  case "April ":
  case "May":
    console.log("The Season is Spring.");
    break;
  case "June":
  case "July":
  case "August":
    console.log("The Season is Summer.");
    break;
}

//challenge--3

const enterDay = prompt("What is the day  today?");

switch (enterDay) {
  case "Saturday":
  case "Sunday":
    console.log("Today is a holiday");
    break;

  default:
    console.log("Today is a working day");
}
