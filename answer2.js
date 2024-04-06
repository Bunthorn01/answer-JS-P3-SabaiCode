function filterArray(arr, callback) {
    const result = [];
    // Iterate over each element of the array
    for (let i = 0; i < arr.length; i++) {
      // Call the callback function with the current element
      if (callback(arr[i])) {
        // If the callback returns true, add the element to the result array
        result.push(arr[i]);
      }
    }
    return result;
}
// Define the callback function to check if a number is even
function isEven(num) {
  return num % 2 === 0;
}
// Define an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Call the filterArray function with the array and the callback
const evenNumbers = filterArray(numbers, isEven);
console.log("Even numbers:", evenNumbers);
  