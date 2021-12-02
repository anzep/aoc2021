const fs = require("fs");

// load the raw input from the file
const inputFile = "Inputs/aoc02input.txt";
const rawInput = fs.readFileSync(inputFile, "utf8");
const rawInputArray = rawInput.split("\n");

let forwardPosition = 0;
let downPosition = 0;
let upPosition = 0;

const forwardPositionCommands = rawInputArray.filter((input) =>
  input.includes("forward")
);
const downPositionCommands = rawInputArray.filter((input) =>
  input.includes("down")
);
const upPositionCommands = rawInputArray.filter((input) =>
  input.includes("up")
);

forwardPositionCommands.forEach((item) => {
  forwardPosition += Number(item.charAt(item.length - 1));
});

downPositionCommands.forEach((item) => {
  downPosition += Number(item.charAt(item.length - 1));
});

upPositionCommands.forEach((item) => {
  upPosition += Number(item.charAt(item.length - 1));
});

let horizontalPosition = forwardPosition;
let depthPosition = downPosition - upPosition;

console.log("\nOur horizontal position is: ", horizontalPosition);
console.log("Our depth position is: ", depthPosition);
console.log(
  "With these parameters, our planned course is: ",
  forwardPosition * depthPosition
);

// START OF TASK 2-2

let aim = 0;
let correctHorizontalPosition = 0;
let correctDepthPosition = 0;

function executeCommand(command) {
  const commandValue = Number(command.charAt(command.length - 1));

  if (command.includes("down")) {
    aim += commandValue;
  } else if (command.includes("up")) {
    aim -= commandValue;
  } else if (command.includes("forward")) {
    correctHorizontalPosition += commandValue;
    correctDepthPosition += commandValue * aim;
  }
}

rawInputArray.forEach((command) => executeCommand(command));

console.log("\n\n--- Correct calculations (2-2) ---\n");
console.log("Our horizontal position is: ", correctHorizontalPosition);
console.log("Our depth position is: ", correctDepthPosition);
console.log("Our aim is: ", aim);
console.log(
  "With these parameters, our planned course is: ",
  correctHorizontalPosition * correctDepthPosition
);
