// Find the minimum element in an array

const readline = require("readline");

const readline_interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findMin(arr) {
  if (arr.length === 0) {
    return null;
  }
  
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

readline_interface.question(
  "Enter numbers separated by commas (e.g., 1,2,3,4,5): ",
  (user_input) => {
    const arr = user_input.split(",").map((num) => parseFloat(num.trim()));
    const min = findMin(arr);
    console.log(`The minimum element in [${arr.join(", ")}] is: ${min}`);
    readline_interface.close();
  }
);

