const fs = require('fs');
// Function to read file contents asynchronously
function readFileContents(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

// Function to write file contents asynchronously
function writeFileContents(filePath, content, callback) {
  fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
}

// Define the callback function to handle errors
function handleError(err) {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("Operation was successful!");
  }
}

// Read the contents of 'input.txt'
readFileContents('input.txt', (err, data) => {
  if (err) {
    console.error("Error:", err);
    return;
  }

  // Append "First modification" to the content and write it to 'output1.txt'
  const modifiedContent1 = data + " First modification";
  writeFileContents('output1.txt', modifiedContent1, (err) => {
    if (err) {
      console.error("Error:", err);
      return;
    }

    // Read 'output1.txt'
    readFileContents('output1.txt', (err, data) => {
      if (err) {
        console.error("Error:", err);
        return;
      }

      // Append "Second modification" to the content and write it to 'output2.txt'
      const modifiedContent2 = data + " Second modification";
      writeFileContents('output2.txt', modifiedContent2, (err) => {
        if (err) {
          console.error("Error:", err);
          return;
        }

        // Read 'output2.txt' and print its contents to the console
        readFileContents('output2.txt', (err, data) => {
          if (err) {
            console.error("Error:", err);
            return;
          }
          console.log("Contents of output2.txt:", data);
        });
      });
    });
  });
});
