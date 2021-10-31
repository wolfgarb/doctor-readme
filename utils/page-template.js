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
<a href='https://opensource.org/licenses/${data.license}'>
<img src='https://img.shields.io/badge/License-${data.license}-blue.svg' />
</a>

## Table of Contents
    
[Installation](#installation)<br>
[Usage](#usage)<br>
[Contributing](#contributing)<br>
[Tests](#tests)<br>
[Questions](#questions)<br>

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