// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
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
        type: 'list',
        message: 'Which license are you using?',
        name: 'license',
        choices: ['Apache 2.0', 'Boost', 'BSD', 'None']
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
]

function renderLicenseBadge(license) 
{
    switch(license){
     case 'Apache 2.0': return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'Boost': return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    case 'BSD': return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    case 'None': return ``
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) 
{
    if (license=='None')
        return ''
    else
        return `* [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) 
{
    if (license=='None')
    return ``
    else
    {
    return `## License:\nThe license that was chosen for this project is ${license}
    \n 
    \n
    `
    }
}

inquirer
    .prompt(questions)
    .then((response) =>
        fs.writeFile('README.md', generateMD(response) ,err => err ? console.error(err) : console.log('Success!'))
    )


    const generateMD=({title, description, installation, usage, technologies, contribution, tests, username, email, license}) =>
{
  
    if(technologies.includes('html'))
        var htmlBadge=`![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)`
        else
        var htmlBadge='';
    if(technologies.toLowerCase().includes('css'))
        var cssBadge=`![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)`
        else
        var cssBadge='';
    if (technologies.toLowerCase().includes('javascript'))
        var jsBadge=`![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)`
        else
        var jsBadge='';
    if (technologies.toLowerCase().includes('jquery'))
        var jqBadge=`![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)`
        else
        var jqBadge='';
    if (technologies.toLowerCase().includes('node.js'))
        var nodeBadge=`![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)`
    
        else
        var nodeBadge='';

    const badgeString=`${htmlBadge} ${cssBadge} ${jsBadge}  ${jqBadge}  ${nodeBadge}`
const readmeString=
`# **${title}**
${renderLicenseBadge(license)}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
${renderLicenseLink(license)}
* [Questions](#questions)

![Image output](https://img.shields.io/github/issues/${username}/${title}?style=for-the-badge)
# Technologies Used:
${badgeString}
\n
[!['s top languages](https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=blue-green)](https://github.com/${username}/${title})
## Description:\n ${description}
\n
\n       
## Installation: \n${installation}
\n
\n        
## Usage: \n${usage}
\n
\n          
## Contributing: \n${contribution}
\n
\n    
${renderLicenseSection(license)}
\n
\n          
## Tests: \n${tests}
\n
\n          
## Questions: \n 
Github: https://github.com/${username}
\n\n      
If you would to reach out to me personally, feel free to email me: ${email}`
return readmeString;
}
