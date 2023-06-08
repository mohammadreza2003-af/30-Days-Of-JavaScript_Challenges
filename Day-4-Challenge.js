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
