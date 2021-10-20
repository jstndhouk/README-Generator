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
        message: 'Provide and useage information.',
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
    .prompt([{
            type: 'input',
            message: 'What is your name?',
            name: 'myname',
        },
        {
            type: 'input',
            message: 'What languages do you know?',
            name: 'languages',
        },
        {
            type: 'input',
            message: 'What is youre preferred method of communication?',
            name: 'method',
        },
    ])
    .then((response) =>
        fs.writeFile('response.txt', `The name was:${response.myname}.\n The language was: ${response.languages}.\n The preferred method of communnication was: ${response.method}.`, err => err ? console.error(err) : console.log('Success!'))
    )
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();