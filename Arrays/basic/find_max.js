// Find the maximum element in an array

const readline = require("readline");

const readline_interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findMax(arr) {
  if (arr.length === 0) {
    return null;
  }
  
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

readline_interface.question(
  "Enter numbers separated by commas (e.g., 1,2,3,4,5): ",
  (user_input) => {
    const arr = user_input.split(",").map((num) => parseFloat(num.trim()));
    const max = findMax(arr);
    console.log(`The maximum element in [${arr.join(", ")}] is: ${max}`);
    readline_interface.close();
  }
);

