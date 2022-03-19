// TODO: Include packages needed for this application
    const inquirer = require('inquirer');
    const generateMarkdown = require('./utils/generateMarkdown')
    const fs = require('fs');
const renderLicenseBadge = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
    //what was your motivation?
    //why did you build this project?
    //What porblem does it solve?
    //what did you learn?
    //what makes your project stand out?
    //challenges
    //future implementation?j

//questions i am adding without using the const question [] provided

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
        message: 'How do you install this project? git clone and then npm install',
    },
    {
        type: 'input',
        name: 'usage information',
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
        name: 'contribution',
        message: 'Who contributed to this project? (Required)',
        validate: contribution => {
            if(contribution) {
                return true;
            } else {
                console.log('Please input who contributed to this project.');
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'GitHub username',
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
        type: 'confirm',
        name: 'license',
        message: 'Would you like to include an MIT license?',
        default: false
    }
])
}






// check this part out at 9.3.5 also if you want to add another read me-- confirming things on 9.3.6 using when
//const questions = [];

//create the function and then call it using the promise? this write file should look the the generate site write file.

// TODO: Create a function to write README file
    //generate?    data needs to be the parameter to gather the data


promptUser()

.then(readMeData => {
    const readMePage = generateMarkdown(readMeData);
    fs.writeFile('./README.md', readMePage, err => {
    if (err) throw new Error (err)
    console.log('read me updated')
})
})
// .then(licenseData => {
//     const licenseAnswered = renderLicenseBadge(licenseData);
//     fs.appendFile('./README.md', licenseAnswered, (err) => {
//         if(err) throw new Error(err)
//         console.log('everything is added to the read me')
//     }) 
// })

//  renderLicenseBadge()
// .then(renderLicenseLink)
// .then(renderLicenseSection)
// .then(renderLicenseBadge => {
// const licenseInReadMe = generateMarkdown(renderLicenseBadge);
// fs.appendFile('./README.md', licenseInReadMe, (err) => {
//     if(err) throw new Error(err)
//     console.log('everything is added to the read me')
// }) 
// })



//THIS CODE IS WRITING TO READ ME!
    // promptUser()
// .then(data => {
//     const filename = 'ReadMe.md'
//     //function writeToFile(filename, data) {
//         fs.writeFile(filename, JSON.stringify(data, null, '\t'), err =>
//         err ? console.log(err): console.log('success!')
//         )
      
//       })
  //}


//writeToFile()

// TODO: Create a function to initialize app
function init() {}
// promptUser()
// .then(answers => console.log(answers))
// //writeToFile("readme.md", generateMarkdown(promptUser))
// }

// Function call to initialize app
init();



