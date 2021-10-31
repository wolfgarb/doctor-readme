function renderContrib(data) {
  if (data.contributing === '') {
    return ``
  } else {
    return `
    ## Contributing
    ${data.contributing}
    `
  }
}

function renderTests(data) {
  if (data.tests === '') {
    return ``
  } else {
    return `
    ## Tests
    ${data.tests}
    `
  }
}

// TODO: Create a function to generate markdown for README
function genMarkdown(data) {
    return `
# ${data.title}
  
## Description
${data.description}

## License
[<img src='https://img.shields.io/badge/License-${data.license}-blue.svg' />](https://opensource.org/licenses/${data.license})

## Table of Contents
    
[Installation](#installation)
[Usage](#usage)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)

----

## Installation
${data.installation}
  
## Usage
${data.usage}

${renderContrib(data)}

${renderTests(data)}

----

## Questions
Feedback and questions are always welcome!

[Github](https://github.com/${data.github})

[Email](mailto:${data.email})
`
  };

module.exports = genMarkdown;