// packages needed for this application
    const inquirer = require('inquirer');
    const generateMarkdown = require('./utils/generateMarkdown')
    const fs = require('fs');


//array of questions for user input
const promptUser = readMeData => {
return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log('Please enter the Read Me title.');
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project? (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description of your project.');
                return false;
            }      
        } 
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install this project? (Ex: git clone and then npm install)',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What will you use this for? (Required)',
        validate: usage => {
            if(usage) {
                return true;
            } else {
                console.log('Please enter the use of this project?');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'How does the user test this project? (Required)',
        validate: test => {
            if(test) {
                return true;
            } else {
                console.log('Please explain how to test this project?');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How to contribute to this project? (Required)',
        validate: contribution => {
            if(contribution) {
                return true;
            } else {
                console.log('Please input how to contributed to this project.');
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username? (Required)',
        validate: userName => {
            if(userName) {
                return true;
            } else {
                console.log('Please provide your username.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email? (Required)',
        validate: email => {
            if(email) {
                return true;
            } else {
                console.log('Please provide your email.')
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Would you like to include an MIT license?',
        choices: ['MIT', 'Apache_2.0', 'Boost_1.0', 'BSD_3--Clause', 'GPLv3', 'none']
        
    }
])
}


//run inquirer user questions
promptUser()
//create a readme based on the users answers
.then(readMeData => {
    const readMePage = generateMarkdown(readMeData);
    fs.writeFile('./README.md', readMePage, err => {
    if (err) throw new Error (err)
    console.log('read me updated')
})
})




