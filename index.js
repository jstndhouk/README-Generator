// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide any installation instructions.',
        name: 'installation',
    },

    {
        type: 'input',
        message: 'Provide any useage information.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide any contribution guidelines.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Provide any test instructions.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter technologies used.  Options: HTML, CSS, JavaScript, jQuery, Node.js',
        name: 'technologies',
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
    .prompt(questionsconst)
    .then((response) =>
        fs.writeFile('README.md', generateMD(response),err => err ? console.error(err) : console.log('Success!'))
    )
if(technologies.includes('html'))
   const htmlBadge=`(https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)`
else if(technologies.toLowerCase().includes('css'))
   const cssBadge=`![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)`
else if (technologies.toLowerCase().includes('javaScript'))
   const jsBadge=`![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)`
else if (technologies.toLowerCase().includes('jquery'))
   const jqBadge=`![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)`
else if (technologies..toLowerCase().includes('Node.js'))
   const nodeBadge=`![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)`
else 
    const noBadge=`No valid language was chosen! :sob:`

const badgeString=`${htmlBadge} ${cssBadge} ${jsBadge}  ${jqBadge}  ${nodeBadge}  ${noBadge}`
    //I want to make the promise fail if we get here in the conditional statement

const generateMD=({title, description, installation, usage, contribution, tests, username, email}, htmlBadge, cssBadge, jsBadge, nodeBadge, noBadge ) =>
`# **${title}**
![Image output](https://img.shields.io/github/issues/${username}/${title}?style=for-the-badge)

#Technologies Used: 
${badgeString}


# Description: ${description}
         
         
# Installation Instructions: \n${installation}
         
         
# Usage: \n${usage}
         
         
# Contributions: \n${contribution}
         
         
# Tests: \n${tests}
         
         
# Github: ${username}
         
         
# Email:${email}`
       
        
    // TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();