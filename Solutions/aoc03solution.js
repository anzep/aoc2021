const fs = require("fs");

// load the raw input from the file
const inputFile = "Inputs/aoc03input.txt";
const rawInput = fs.readFileSync(inputFile, "utf8");
const rawInputArray = rawInput.split("\n");

const lenghtOfReading = rawInputArray[0].length;

let gama = "";
let epsilon = "";

for (let i = 0; i < lenghtOfReading; i++) {
  let fullNumberString = "";

  rawInputArray.forEach((input) => {
    fullNumberString += input.charAt(i);
  });

  const ones = [];
  for (let i = 0; i < fullNumberString.length; i++) {
    if (fullNumberString.charAt(i) === "1") {
      ones.push(fullNumberString.charAt(i));
    }
  }
  if (ones.length > fullNumberString.length / 2) {
    gama += "1";
  } else {
    gama += "0";
  }
}

for (let i = 0; i < gama.length; i++) {
  if (gama.charAt(i) === "1") {
    epsilon += "0";
  } else {
    epsilon += "1";
  }
}

console.log("gama", gama, parseInt(gama, 2));
// console.log("epsilon", epsilon, parseInt(epsilon, 2));
// console.log(parseInt(gama, 2) * parseInt(epsilon, 2));

// Start of 3-2

let fullNumberString2 = "";
let number = "";

rawInputArray.forEach((input) => {
  fullNumberString2 += input.charAt(0);
});

const ones2 = [];
for (let i = 0; i < fullNumberString2.length; i++) {
  if (fullNumberString2.charAt(i) === "1") {
    ones2.push(fullNumberString2.charAt(i));
  }
}
if (ones2.length >= fullNumberString2.length / 2) {
  number += "1";
} else {
  number += "0";
}

console.log(fullNumberString2, number);
