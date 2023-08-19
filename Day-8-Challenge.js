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

//Exercises: Level 3

//Challenge--1

const personAccount = {
  firstName: "John",
  lastName: "Doe",
  incomes: [],
  expenses: [],

  totalIncome() {
    return this.incomes.reduce((total, income) => total + income.amount, 0);
  },

  totalExpense() {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  },

  accountInfo() {
    return `Account Information:\nName: ${this.firstName} ${
      this.lastName
    }\nTotal Income: ${this.totalIncome()}\nTotal Expense: ${this.totalExpense()}`;
  },

  addIncome(description, amount) {
    this.incomes.push({ description, amount });
  },

  addExpense(description, amount) {
    this.expenses.push({ description, amount });
  },

  accountBalance() {
    const balance = this.totalIncome() - this.totalExpense();
    return `Account Balance: ${balance}`;
  },
};

personAccount.addIncome("Salary", 3000);
personAccount.addIncome("Freelance", 500);
personAccount.addExpense("Rent", 1000);
personAccount.addExpense("Groceries", 200);
console.log(personAccount.accountInfo());
console.log(personAccount.accountBalance());

//Challenge--2

const users1 = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

//A :

const checkIn = function (username, email, password) {
  for (const user of users1) {
    if (
      (user.username === username || user.email === email) &&
      user.password === password
    ) {
      return true;
    }
  }
  return false;
};
function signUp(newUser) {
  if (checkIn(newUser.username, newUser.email, newUser.password)) {
    return `User ${newUser.username} already has an account.`;
  } else {
    users1.push(newUser);
    return `User ${newUser.username} has been successfully added.`;
  }
}

console.log(
  signUp({
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  })
);

function signIn(oldUser) {
  if (checkIn(oldUser.username, oldUser.email, oldUser.password)) {
    return `Congratulations, you have successfully logged into your account`;
  } else {
    return `Your login information is incorrect`;
  }
}

console.log(
  signIn({
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  })
);
console.log(
  signIn({
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "1233333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  })
);

//Challenge--3

//A :

function rateProduct(productId, userId, rating) {
  const product = products.find((product) => product._id === productId);

  if (product) {
    const existingRating = product.ratings.find(
      (ratingObj) => ratingObj.userId === userId
    );
    if (existingRating) {
      existingRating.rate = rating;
      console.log(`Updated rating for product ${product.name}: ${rating}`);
    } else {
      product.ratings.push({ userId, rate: rating });
      console.log(`Rated product ${product.name} with ${rating} stars.`);
    }
  } else {
    console.log(`Product with ID ${productId} not found.`);
  }
}

rateProduct("eedfcf", "abc123", 4.0);
rateProduct("aegfal", "fg12cy", 4.8);
rateProduct("xyz123", "fg12cy", 3.5);

//B :

function averageRating(productId) {
  const product = products.find((product) => product._id === productId);

  if (product && product.ratings.length > 0) {
    const totalRatings = product.ratings.reduce(
      (total, ratingObj) => total + ratingObj.rate,
      0
    );
    const avgRating = totalRatings / product.ratings.length;
    return `Average rating for product ${product.name}: ${avgRating.toFixed(
      2
    )}`;
  } else if (product && product.ratings.length === 0) {
    return `Product ${product.name} has no ratings yet.`;
  } else {
    return `Product with ID ${productId} not found.`;
  }
}

console.log(averageRating("eedfcf"));
console.log(averageRating("aegfal"));
console.log(averageRating("xyz123"));

//Challenge--4

function likeProduct(productId, userId) {
  const product = products.find((product) => product._id === productId);

  if (product) {
    const userIndex = product.likes.indexOf(userId);

    if (userIndex !== -1) {
      product.likes.splice(userIndex, 1);
      console.log(`Removed like from product ${product.name}.`);
    } else {
      product.likes.push(userId);
      console.log(`Liked product ${product.name}.`);
    }
  } else {
    console.log(`Product with ID ${productId} not found.`);
  }
}

// Example usage
likeProduct("eedfcf", "abc123"); // Liked product 'mobile phone'.
likeProduct("aegfal", "fg12cy"); // Removed like from product 'Laptop'.
likeProduct("xyz123", "fg12cy"); // Product with ID 'xyz123' not found.
