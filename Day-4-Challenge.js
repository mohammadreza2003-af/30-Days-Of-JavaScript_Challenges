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
