const fs = require("fs");

// load the raw input from the file
const inputFile = "Inputs/aoc01input.txt";
const rawInput = fs.readFileSync(inputFile, "utf8");
const rawInputArray = rawInput.split("\n");
const inputArray = rawInputArray.map((i) => Number(i));

let increase = 0;

for (let i = 1; i < inputArray.length; i++) {
  if (inputArray[i] > inputArray[i - 1]) {
    increase++;
  }
}

console.log("The solution of the task 1-1 is: ", increase);

// START OF TASK 1-2

let groupedIncrease = 0;

const groupedArray = [];

// build groupedArray without incomplete groups
for (var i = 0; i < inputArray.length; i++) {
  if (inputArray[i] && inputArray[i + 1] && inputArray[i + 2]) {
    groupedArray.push([inputArray[i], inputArray[i + 1], inputArray[i + 2]]);
  }
}

// calculate the groupedIncrease
for (let i = 1; i < groupedArray.length; i++) {
  const firstGroup = groupedArray[i];
  const secondGroup = groupedArray[i - 1];
  const firstGroupSum = firstGroup[0] + firstGroup[1] + firstGroup[2];
  const secondGroupSum = secondGroup[0] + secondGroup[1] + secondGroup[2];

  if (firstGroupSum > secondGroupSum) {
    groupedIncrease++;
  }
}

console.log("The solution of the task 1-2 is: ", groupedIncrease);
