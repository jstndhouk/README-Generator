// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        message: 'What is the name of your project?',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'Provide a description of your project.',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'Provide any installation instructions.',
        name: 'Installation',
    },

    {
        type: 'input',
        message: 'Provide any useage information.',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'Provide any contribution guidelines.',
        name: 'Contribution',
    },
    {
        type: 'input',
        message: 'Provide any test instructions.',
        name: 'Tests',
    },
    {
        type: 'input',
        message: 'Provide your github username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Provide your email address',
        name: 'email',
    }
];

// TODO: Create a function to write README file
inquirer
    .prompt(questions)
    .then((response) =>
        fs.writeFile('README.md', `# ${response.Title}\n\n# Description:\n${response.Description}\n\n# Installation Instructions: \n${response.Installation}\n\n# Usage: \n${response.Usage}\n\n# Contributions: \n${response.Contribution}\n\n# Tests: \n${response.Tests}\n\n# Github username: ${response.username}\n\n# Email:${response.email}`, err => err ? console.error(err) : console.log('Success!'))
    )
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();