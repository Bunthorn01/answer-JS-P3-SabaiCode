const fs = require('fs');
function writeFileContents(filePath, content, callback) {
  // Write the content to the file asynchronously
  fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
      // If an error occurs, call the callback function with the error
      callback(err);
    } else {
      // If successful, call the callback function with no error
      callback(null);
    }
  });
}
// Define the callback function to handle errors
function handleWriteFileError(err) {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("File was written successfully!");
  }
}
// Provide the file path and content as arguments
const filePath = 'D:/sabai code/exercises/exercise JS(P3)/store.txt'; // Change 'example.txt' to the path where you want to write the file
const contentToWrite = 'Hello, world! This is some content written asynchronously.';
// Call the writeFileContents function with the file path, content, and callback
writeFileContents(filePath, contentToWrite, handleWriteFileError);
