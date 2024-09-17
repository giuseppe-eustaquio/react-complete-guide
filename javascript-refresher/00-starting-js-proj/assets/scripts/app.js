// import named
// import { apiKey } from "./util.js";
// console.log(util.apiKey);

// import multiple named
// import { apiKey, abc as content } from "./util.js";
// console.log(apiKey, content);

// import all as javascript object
// import * as util from "./util.js";
// console.log(util.abc);

// import default
// import apiKey from "./util.js";

// sample function
const combine = function (a, b, c) {
  return (a * b) / c;
};

const hobbies = ["sports", "cooking", "reading"];

hobbies.push("working");

// const index = hobbies.findIndex((item) => {
//   return item === "sports";
// });
const index = hobbies.findIndex((item) => item === "sports");

const surprisedHobbies = hobbies.map((item) => item + "!");
const objectHobbies = hobbies.map((item) => ({ text: item }));

const transformToObjects = function (numberArray) {
  return numberArray.map((num) => ({ val: num }));
};

// console.log(transformToObjects([1, 2, 3]));

// destructure array

const [firstName, lastName] = ["Abcd", "Efgh"];
// console.log(firstName, lastName);

// destructure objects
const { name, age } = {
  name: "Abcd",
  age: 99,
};

console.log(name, age);
