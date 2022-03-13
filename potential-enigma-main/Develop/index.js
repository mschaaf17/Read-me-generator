// TODO: Include packages needed for this application
    //add inquirer
    const inquirer = require('inquirer');
   // const fs = require('fs');
// TODO: Create an array of questions for user input
    //what was your motivation?
    //why did you build this project?
    //What porblem does it solve?
    //what did you learn?
    //what makes your project stand out?
    //challenges
    //future implementation?j

//questions i am adding without using the const question [] provided

const promptUser = () => {
return inquirer.prompt([
    {
        type: 'input',
        name: 'project title',
        message: 'What is the title of your project?'
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project?'
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install this project? git clone and then npm install'
    },
    {
        type: 'input',
        name: 'usage information',
        message: 'What will you use this for?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to this project?'
    },
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'What licenses were used? (Check all the apply)',
        choices: ['inquirer', 'idk']
    }, 
    {
        type: 'input',
        name: 'GitHub username',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email'
    }
])
}
promptUser().then(answers => console.log(answers))

const questions = [];

// TODO: Create a function to write README file
    //generate?
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

