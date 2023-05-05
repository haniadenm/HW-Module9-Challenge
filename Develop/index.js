// TODO: Include packages needed for this application
var prompt = require("prompt-sync")();
// TODO: Create an array of questions for user input
const questions = [
  "project title: ",
  "description: ",
  "installation instructions: ",
  "usage information: ",
  "contribution guidelines: ",
  "test instructions: ",
];

const answers = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  questions.forEach((question) => {
    var answer = prompt(question);
    answers.push(answer);
  });
  console.log(answers);
}

// Function call to initialize app
init();
