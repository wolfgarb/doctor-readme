// TODO: Create a function to generate markdown for README
const genMarkdown = userInput => {
    return `
    # ${userInput.title}
  
    ## Description
    ${userInput.description}
  
    ## Table of Contents
  
    ## Installation
    ${userInput.installation}

    ## Usage
  
    ## License
    
    ## Contributing
  
    ## Tests
  
    ## Questions
    Feedback and questions are always welcome!
  
  `;
  }

module.exports = genMarkdown;