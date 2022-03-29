
//function to return license information, if there is no license, return an empty string
const renderLicenseBadge = licenseAnswer => {
if(licenseAnswer === 'none'){
return '';

} else if(licenseAnswer === 'Apache_2.0') {
return `
## License [![License: ${licenseAnswer}](https://img.shields.io/badge/License-${licenseAnswer}-yellow.svg)](https://opensource.org/licenses/Apache-2.0)
`;

} else if(licenseAnswer === 'Boost_1.0') {
return `
## License [![License: ${licenseAnswer}](https://img.shields.io/badge/License-${licenseAnswer}-yellow.svg)](https://choosealicense.com/licenses/bsl-1.0/)
`;
} else if(licenseAnswer === 'BSD_3--Clause') {
return `
## License [![License: ${licenseAnswer}](https://img.shields.io/badge/License-${licenseAnswer}-yellow.svg)](https://opensource.org/licenses/BSD-3-Clause)
`;
} else if(licenseAnswer === 'GPLv3') {
return `
## License [![License: ${licenseAnswer}](https://img.shields.io/badge/License-${licenseAnswer}-yellow.svg)](https://choosealicense.com/licenses/gpl-3.0/)
`;
} else {
return `
## License [![License: ${licenseAnswer}](https://img.shields.io/badge/License-${licenseAnswer}-yellow.svg)](https://opensource.org/licenses/MIT)
`;

}
}

// function to generate markdown for README
function generateMarkdown(data) {
if(!data) {
  return '';
}
return `
${renderLicenseBadge(data.license)}
# ${data.title}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Contribution](#contribution)
* [Usage](#usage)
* [GitHub](#github-profile)
* [Contact Me](#for-any-questions-contact)

## Description:
${data.description}

## Usage:
${data.usage}
## Installation:
${data.install}
## Contribution:
${data.contribution}

## GitHub Profile:
[${data.username}](https://github.com/${data.username})
## For any questions contact: ${data.email}

`;
};

//this is only the generate  markdown function to be used in index.js
module.exports = generateMarkdown