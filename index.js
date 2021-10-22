// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')

// const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = data => {
    console.log(`
    ================
    README Generator
    ================
    `)
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? '
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username: '
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project: '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide steps required to install this project'
    },
    {
        type: 'confirm',
        name: 'license',
        message: 'Would you like to add a license? ',
        default: false
    }
])
};



questions()
    .then(data => {
        console.log(data);
    })


// TODO: Create a function to write README file
// function writeFile() {
// }

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
