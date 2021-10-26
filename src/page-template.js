// TODO: Create a function to generate markdown for README
const genMarkdown = data => {
    console.log(
        `
    # ${data.title}
  
    ## Description
    ${data.description}
  
    ## Table of Contents
  
    ## Installation
    ${data.installation}
  
    ## Usage
  
    ## License
    
    ## Contributing
  
    ## Tests
  
    ## Questions
    Feedback and questions are always welcome!
  `
    );
  }

module.exports = genMarkdown;