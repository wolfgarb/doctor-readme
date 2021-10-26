const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if TRUE carry out logic
  // else return = []
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    // if TRUE carry out logic
  // else return = []
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    // if TRUE carry out logic
  // else return = []
}

const writeFile = (userInput) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', userInput, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
}



module.exports = writeFile;
