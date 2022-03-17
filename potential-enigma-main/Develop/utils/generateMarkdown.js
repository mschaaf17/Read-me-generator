

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if(!data) {
    return '';
  }
  return `
    #Table of Contents
     #${data.title}
     #${data.description}
     #${data.install}
    - ${data.description}
    - ${data.description}
    - ${data.description}


    [${data.title}](#${data.title})
    **Purpose**
    [${data.description}](#${data.description})
    **Instalization**
    ${data.install}
    **Contribution**
    ${data.contribution}
    **${data.userName}**
    ## For more information contact ${data.email}
    ## add image, website url, built, licenses

`;
}

//this is only the generate  markdown function 
module.exports = generateMarkdown
