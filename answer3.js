const fs = require('fs');
function readFileContents(filePath, callback) {
  // Read the contents of the file asynchronously
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // If an error occurs, call the callback function with the error
      callback(err);
    } else {
      // If successful, call the callback function with the file contents
      callback(null, data);
    }
  });
}

// Define the callback function to print the file contents
function printContents(err, data) {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("\nFile contents:\n", data);
  }
}

// Provide the file path as an argument
const filePath = 'D:/sabai code/exercises/exercise JS(P3)/store.txt'; // Change 'example.txt' to the path of your file

// Call the readFileContents function with the file path and callback
readFileContents(filePath, printContents);
