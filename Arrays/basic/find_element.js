// Find if an element exists in an array and return its index

const readline = require("readline");

const readline_interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

readline_interface.question(
  "Enter numbers separated by commas (e.g., 1,2,3,4,5): ",
  (array_input) => {
    readline_interface.question(
      "Enter the element to find: ",
      (target_input) => {
        const arr = array_input.split(",").map((num) => parseFloat(num.trim()));
        const target = parseFloat(target_input.trim());
        const index = findElement(arr, target);
        
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

