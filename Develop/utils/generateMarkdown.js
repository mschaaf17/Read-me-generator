
// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string'
// const renderLicenseBadge = licenseAnswer => {
//   if(!licenseAnswer){
//     return '';
//   }
//   return `
//   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
//   (https://opensource.org/licenses/MIT)
//   # License ${licenseAnswer}
//   ;`

// }
//  function renderLicenseBadge(data) {
  
 //}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
//  function renderLicenseLink(data) {
//   if(!data.license){
//     return '';
//   }
//   return `
  
//   `
//  };

// // // TODO: Create a function that returns the license section of README
// // // If there is no license, return an empty string
//  function renderLicenseSection(license) {
// if(!data.license) {
//   return ''
// }
// return `

// `
//  };

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if(!data) {
    return '';
  }
  //can i return the function inside this backtick? instead of trying to recreate a write me file?
  return `
  #License [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)]
  (https://opensource.org/licenses/${data.license})
  #${data.title}
    ## Table of Contents
    - [Description](#${data.description})
    - [Installation](#${data.install})
    - [Contribution](#${data.contribution})
    - [Usage](#${data.description})
    - [Contact Me](#${data.username})

    ## Description:
    ${data.description}
    ## Installation:
    ${data.install}
    ## Contribution:
    ${data.contribution}
    
    ## GitHub Profile:
    ${data.username}(github.com/${data.username})
    ## For more information contact ${data.email}
    ## add image, website url, built, licenses

`;
};

//this is only the generate  markdown function 
module.exports = generateMarkdown