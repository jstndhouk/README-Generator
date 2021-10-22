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
]

inquirer
    .prompt(questions)
    .then((response) =>
        fs.writeFile('README.md', generateMD(response) ,err => err ? console.error(err) : console.log('Success!'))
    )

const generateMD=({title, description, installation, usage, technologies, contribution, tests, username, email}) =>{
  
if(technologies.includes('html')){
    var htmlBadge=`![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)`
    console.log('html success!')}
    else
    var htmlBadge='';
if(technologies.toLowerCase().includes('css')){
    var cssBadge=`![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)`
    console.log('css success!')}
    else
    var cssBadge='';
if (technologies.toLowerCase().includes('javascript')){
    var jsBadge=`![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)`
    console.log('javascript success!')}
    else
    var jsBadge='';
if (technologies.toLowerCase().includes('jquery')){
    var jqBadge=`![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)`
    console.log('jquery success!')}
    else
    var jqBadge='';
if (technologies.toLowerCase().includes('node.js')){
    var nodeBadge=`![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)`
    console.log('node success!')}
    else
    var nodeBadge='';

const badgeString=`${htmlBadge} ${cssBadge} ${jsBadge}  ${jqBadge}  ${nodeBadge}`
console.log(badgeString)
const readmeString=
`# **${title}**
![Image output](https://img.shields.io/github/issues/${username}/${title}?style=for-the-badge)
# Technologies Used:
${badgeString}
\n
[!['s top languages](https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=blue-green)](https://github.com/${username}/${title})
# Description:\n ${description}
\n
\n       
# Installation: \n${installation}
\n
\n        
# Usage: \n${usage}
\n
\n          
# Contributing: \n${contribution}
\n
\n         
# Tests: \n${tests}
\n
\n          
# Questions: \n 
Github: https://github.com/${username}
\n\n      
If you would to reach out to me personally, feel free to email me: ${email}`
return readmeString;
}
