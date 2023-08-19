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

//Exercises: Level 2

//Challenge--1

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let maxSkills = 0;
let skillfulPerson = "";

for (const person in users) {
  const skillsCount = users[person].skills.length;
  if (skillsCount > maxSkills) {
    maxSkills = skillsCount;
    skillfulPerson = person;
  }
}

console.log(
  `The person with the most skills is ${skillfulPerson} : ${maxSkills}`
);

//Challenge--2

let loggedInCount = 0;
let greaterThan50PointsCount = 0;

for (const user in users) {
  if (users[user].isLoggedIn) {
    loggedInCount++;
  }
  if (users[user].points >= 50) {
    greaterThan50PointsCount++;
  }
}
console.log("Logged-in Users Count:", loggedInCount);
console.log("Users with Points >= 50 Count:", greaterThan50PointsCount);

//Challenge--3

const mernStackDev = [];

for (const user in users) {
  const skill = users[user].skills;
  if (
    skill.includes("MongoDB") &&
    skill.includes("Express") &&
    skill.includes("React") &&
    skill.includes("Node")
  ) {
    mernStackDev.push(user);
  }
}
console.log(mernStackDev);

//Challenge--4

users.mohammadreza = {
  email: "paul@paul.com",
  skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
  age: 20,
  isLoggedIn: false,
  points: 40,
};
console.log(users);

//Challenge--5

const allKeyUsers = Object.keys(users);
console.log(allKeyUsers);

//Challenge--6

const allValueUsers = Object.values(users);
console.log(allValueUsers);

//Challenge--7

const countries = [
  {
    name: "United States",
    capital: "Washington, D.C.",
    population: 331002651,
    languages: ["English"],
  },
  {
    name: "United Kingdom",
    capital: "London",
    population: 67886011,
    languages: ["English"],
  },
  // Add more countries here...
];

for (const country of countries) {
  console.log("Country:", country.name);
  console.log("Capital:", country.capital);
  console.log("Population:", country.population);
  console.log("Languages:", country.languages.join(", "));
  console.log("-------------------------------");
}
