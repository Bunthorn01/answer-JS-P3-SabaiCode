function ArrayNum(arr, callback) {
  // Iterate over each element of the array
  for (let i = 0; i < arr.length; i++) {
    // Call the callback function with the squared value of the current element
    callback(arr[i] * arr[i]);
  }
}

// Define the callback function to process each squared number
function ElementArr(num) {
  console.log(num);
}

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Call the processArray function with the array and the callback
ArrayNum(numbers, ElementArr);
  