// TODO: Create a function to generate markdown for README
const genMarkdown = data => {
    console.log(
        `
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
    
    ## Contributing
  
    ## Tests
  
    ----

    ## Questions
    Feedback and questions are always welcome!
    [Github] (https://github.com/${data.github})
    [Email] (mailto:${data.email})
  `
    );
  }

module.exports = genMarkdown;