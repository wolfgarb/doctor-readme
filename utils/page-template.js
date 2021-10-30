
// TODO: Create a function to generate markdown for README
function genMarkdown(data) {
    return `
    # ${data.title}
  
    ## Description
    ${data.description}

    ## License
    [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

    ## Table of Contents
    
    [Installation] (#installation)
    [Usage] (#usage)
    [Contributing] (#contributing)
    [Tests] (#tests)
    [Questions] (#questions)

    ----

    ## Installation
    ${data.installation}
  
    ## Usage
    ${data.usage}

    ## Contributing
    ${data.contributing}

    ## Tests
    ${data.tests}

    ----

    ## Questions
    Feedback and questions are always welcome!
    [Github] (https://github.com/${data.github})
    [Email] (mailto:${data.email})
  `
  };

module.exports = genMarkdown;