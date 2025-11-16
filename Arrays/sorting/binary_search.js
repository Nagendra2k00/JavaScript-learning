// Binary search to find an element in a sorted array

const readline = require("readline");

const readline_interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}

readline_interface.question(
  "Enter sorted numbers separated by commas (e.g., 1,2,3,4,5,6,7): ",
  (array_input) => {
    readline_interface.question(
      "Enter the element to search: ",
      (target_input) => {
        const arr = array_input.split(",").map((num) => parseFloat(num.trim()));
        const target = parseFloat(target_input.trim());
        const index = binarySearch(arr, target);
        
        if (index !== -1) {
          console.log(`Element ${target} found at index ${index} in [${arr.join(", ")}]`);
        } else {
          console.log(`Element ${target} not found in [${arr.join(", ")}]`);
        }
        readline_interface.close();
      }
    );
  }
);

