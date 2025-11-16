// Calculate the sum of all elements in an array

const readline = require("readline");

const readline_interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

readline_interface.question(
  "Enter numbers separated by commas (e.g., 1,2,3,4,5): ",
  (user_input) => {
    const arr = user_input.split(",").map((num) => parseFloat(num.trim()));
    const sum = sumArray(arr);
    console.log(`The sum of [${arr.join(", ")}] is: ${sum}`);
    readline_interface.close();
  }
);

