// Count the number of even numbers in an array

const readline = require("readline");

const readline_interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function countEven(arr) {
  let count = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      count++;
    }
  }
  return count;
}

readline_interface.question(
  "Enter numbers separated by commas (e.g., 1,2,3,4,5): ",
  (user_input) => {
    const arr = user_input.split(",").map((num) => parseFloat(num.trim()));
    const count = countEven(arr);
    console.log(`The number of even numbers in [${arr.join(", ")}] is: ${count}`);
    readline_interface.close();
  }
);

