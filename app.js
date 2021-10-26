// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const genMarkdown = require("./src/page-template.js");

// const writeFile = require("./utils/gen-md.js");

function questions(data) {
  console.log(`
    ================
    README Generator
    ================
    `);
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project? (Required) ",
      validate: (projTitle) => {
        if (projTitle) {
          return true;
        } else {
          console.log("Please enter a title");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your GitHub username. (Required) ",
      validate: (githubUser) => {
        if (githubUser) {
          return true;
        } else {
          console.log("Please enter username");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description for your project. (Required) ",
      validate: (projDescription) => {
        if (projDescription) {
          return true;
        } else {
          console.log("Please provide a description");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "Please provide steps required to install this project if applicable.",
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.'
    },
    {
      type: "checkbox",
      name: "license",
      message: "Choose a license for your project, or select 'None'. ",
      choices: ["MIT", "Apache", "GPL", "None"],
    },
    {
      type: 'confirm',
      name: 'confirmContributing',
      message: 'Would you like to add any contributors?',
      default: false,
    },
    {
      type: 'confirm',
      name: 'confirmTests',
      message: 'Would you like to include testing for this project?',
      default: false,
    },
  ])
  .then((data) => {
    console.log(data);
  })
    
};

// genMarkdown(userInput);
// if (userInput.confirmContributing) { ... }
// else { return userInput }

// TODO: Create a function to write README file
// function writeFile(fileName, data) {

// }



questions();

