// Filter out all positive numbers from an array

const readline = require("readline");

const readline_interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function filterPositive(arr) {
  const result = [];
  for (let num of arr) {
    if (num > 0) {
      result.push(num);
    }
  }
  return result;
}

readline_interface.question(
  "Enter numbers separated by commas (e.g., -2,-1,0,1,2,3): ",
  (user_input) => {
    const arr = user_input.split(",").map((num) => parseFloat(num.trim()));
    const filtered = filterPositive(arr);
    console.log(`Positive numbers in [${arr.join(", ")}] are: [${filtered.join(", ")}]`);
    readline_interface.close();
  }
);

