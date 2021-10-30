// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const genMarkdown = require('./utils/page-template.js')
// import genMarkdown from "./src/page-template.js";
// import writeFile from './utils/gen-md.js'
// const writeFile = require("./utils/gen-md.js");

async function questions() {
  console.log(`
    ================
    README Generator
    ================
    `)
  inquirer.prompt([
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
      message: "Choose a license for your project: ",
      choices: ["MIT", "Apache-2.0", "ISC", "Unlicense"],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please list any additional contributors, if none hit enter',
      default: 'none',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide testing for this project, if none hit enter',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email if you would like to be contacted',
    }
  ])
  .then((userInput) => {
    console.log(userInput)
    return writeToFile('./dist/README.md', genMarkdown(userInput));
    // return genMarkdown(userInput);
  })
  
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
     throw err;
    } else {
      console.log('File written');
    }
  })
};
  

questions();


