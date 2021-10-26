const fs = require('fs');

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
